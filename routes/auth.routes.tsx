import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AuthScreen from "../Pages/Auth";

export type RootStackParamList = {
  AuthScreen: any;
};

export const Stack = createStackNavigator<RootStackParamList>();
export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

export function AuthRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  viewimage: {
    position: "absolute",
    top: -35,

    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 900,
    borderColor: "#4B92E5",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  imagemmodal: {
    width: 40,
    height: 40,
  },
});
