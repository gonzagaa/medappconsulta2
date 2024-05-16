import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

// @ts-ignore
import logobranca from "../Image/logobranca.png";
// @ts-ignore
import logochackes from "../Image/logochecks.png";

import { StackNavigation } from "../routes/app.route";
import { useNavigation } from "@react-navigation/native";

const ContaCriada = () => {
  const navigation: StackNavigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={logobranca}
        style={styles.logobranca}
        resizeMode="contain"
      ></Image>
      <Image
        source={logochackes}
        style={styles.logochackes}
        resizeMode="contain"
      ></Image>
      <Text style={styles.texto}>Sua conta foi criada!</Text>
      <TouchableOpacity
        style={styles.buttonEntrar}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.textbuton}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 70,
    backgroundColor: "#034677",
    textAlign: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  buttonEntrar: {
    backgroundColor: "#ffff",
    padding: 10,
    marginTop: 15,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    width: "100%",
  },

  texto: {
    textAlign: "center",
    fontSize: 22,
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "700",
  },

  textbuton: {
    textAlign: "center",
    fontSize: 18,
    color: "#4B92E5",
    fontFamily: "Montserrat",
    fontWeight: "700",
  },

  logobranca: {
    width: 150,
  },

  logochackes: {
    width: 300,
  },
});

export default ContaCriada;
