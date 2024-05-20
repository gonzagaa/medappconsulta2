import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  updateEmail,
  updatePassword,
  onAuthStateChanged,
  signInWithCustomToken,
  UserInfo,
  GoogleAuthProvider,
} from "firebase/auth";
import { app, db } from "../componentes/Config";

import {
  DocumentData,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

type User = {
  uid?: string;
  email?: string;
  emailVerified?: boolean;
  displayName?: string;
  isAnonymous?: boolean;
  photoURL?: string;
  providerData?: {
    providerId: string;
    uid: string;
    displayName: string;
    email: string;
    phoneNumber: string | null;
    photoURL: string;
  }[];
  stsTokenManager?: {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  };
  createdAt?: string;
  lastLoginAt?: string;
  apiKey?: string;
  appName?: string;
};

type Error = {
  error: string;
  status: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type SignUpCredentials = {
  name: string;
  username?: string;
  email: string;
  thumbnail?: string;
  password: string;
};

type AuthContextData = {
  user: UserInfo | undefined | null;
  error: Error | undefined | null;
  signIn: (credentials: SignInCredentials) => Promise<any>;
  signInGoogle: () => Promise<void>;
  signUp: (credentials: SignUpCredentials) => Promise<any>;
  signOut: () => Promise<void>;
  changeProfileImage: (image: string) => Promise<void>;
  loadUser: () => Promise<void | string>;
  updateUser: (nome: string, email: string, senha: string) => Promise<void>;
  verificationEmail: () => void;
  loading: boolean;
  token: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

type FirestoreProps = {
  userChaptersProgress: DocumentData[];
};

export const USER = "@Auth:user";
export const TOKEN = "@Auth:token";

export const AuthContext = createContext({} as AuthContextData);

async function signOut() {
  await AsyncStorage.removeItem(TOKEN);
  await AsyncStorage.removeItem(USER);
}

function AuthProvider({ children }: AuthProviderProps) {
  const auth = getAuth(app);

  const [user, setUser] = useState<UserInfo | null>(null);
  const [token, setToken] = useState<string>("");

  const [error, setError] = useState<Error | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user as UserInfo);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  async function loadUser() {
    setLoading(true);
    const userAS = await AsyncStorage.getItem(USER);
    const tokenAS = await AsyncStorage.getItem(TOKEN);

    try {
      if (userAS) {
        const userJSON: UserInfo = JSON.parse(userAS);
        const q = query(
          collection(db, "Users"),
          where("id", "==", userJSON.uid)
        );

        const querySnapshot = await getDocs(q);
        const user = querySnapshot.docs.map((doc) => doc.data())[0];
        setUser(user as UserInfo);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }

    // if (user && token) {
    //   setUser(JSON.parse(user));
    //   setToken(token);

    //   // await getUserChaptersProgress(JSON.parse(user).uid);
    // }
  }

  useEffect(() => {
    loadUser();
  }, []);

  async function signInGoogle() {
    try {
      alert("implementar");
    } catch (error) {
      console.error(error);
    }
  }

  async function signIn({ email, password }: SignInCredentials) {
    try {
      setLoading(true);

      const res = await signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;

          AsyncStorage.setItem(TOKEN, user.refreshToken);
          AsyncStorage.setItem(USER, JSON.stringify(user));
          setToken(user.refreshToken);
          setUser(user);
          setLoading(false);
          return user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoading(false);
          return {
            errorCode,
            errorMessage,
          };
        });

      return res;
    } catch (error: any) {
      setLoading(false);
      return error;
    }
  }

  async function signUp({
    name,
    username,
    thumbnail,
    email,
    password,
  }: SignUpCredentials) {
    try {
      setLoading(true);

      const res = await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;

          await updateProfile(user, {
            displayName: name,
            photoURL: thumbnail,
          });

          AsyncStorage.setItem(TOKEN, user.refreshToken);
          AsyncStorage.setItem(USER, JSON.stringify(user));
          setToken(user.refreshToken);
          setUser(user);
          setLoading(false);
          return user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoading(false);
          return {
            errorCode,
            errorMessage,
          };
        });

      return res;
    } catch (error: any) {
      setLoading(false);
      return error;
    }
  }

  async function signOut() {
    AsyncStorage.removeItem(USER).then(() => {
      setUser(null);
    });
    AsyncStorage.removeItem(TOKEN).then(() => {
      setUser(null);
    });
    await auth.signOut();
  }

  async function updateUser(nome: string, email: string, senha: string) {
    const user = getAuth().currentUser;

    if (user) {
      try {
        updateProfile(user, {
          displayName: nome,
        });
        updateEmail(user, email);
        updatePassword(user, senha);
      } catch (error) {
        console.error(error);
      }
    }
  }

  function checkEmailVerified() {
    const user = getAuth().currentUser;
    if (user) {
      return user.emailVerified;
    }
  }

  function verificationEmail() {
    const user = getAuth().currentUser;
    const isVerified = checkEmailVerified();
    if (user && !isVerified) {
      sendEmailVerification(user)
        .then(() => {
          console.log("Email enviado");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // async function loadUser() {
  //   const user = getAuth().currentUser;

  //   if (user) {
  //     // setUser({
  //     //   uid: user.uid,
  //     //   displayName: String(user.displayName),
  //     //   email: String(user.email),
  //     //   photoURL: String(user.photoURL),
  //     // });
  //   }

  //   return String(user?.uid);
  // }

  async function changeProfileImage(photoURL: string) {
    console.log(photoURL);
    await updateDoc(doc(db, "Users", String(user?.uid)), {
      ...(user as UserInfo),
      photoURL,
    });
    setUser({
      ...(user as UserInfo),
      photoURL,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        error,
        loading,
        signIn,
        signInGoogle,
        signUp,
        signOut,
        changeProfileImage,
        loadUser,
        updateUser,
        verificationEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth, signOut };
