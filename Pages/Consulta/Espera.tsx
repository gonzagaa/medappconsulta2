import React from "react";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

// @ts-ignore
import logochackes from "../../Image/logo.png";

import { StackNavigation } from "../../routes/app.route";
import { useNavigation } from "@react-navigation/native";

const Espera = () => {
  const navigation: StackNavigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={logochackes}
        style={styles.logochackes}
        resizeMode="contain"
      ></Image>
      <Text style={styles.texto}>
        Seu atendimento irá começar em breve
        <Text style={styles.pontinhos}>...</Text>
      </Text>

      <View style={styles.vazia}></View>

      <TouchableOpacity
        style={{
          marginTop: 40,
          paddingBottom: 20,
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#EEE",
            fontSize: 18,
            textAlign: "center",
            fontFamily: "Montserrat",
            marginRight: 10,
          }}
        >
          Suporte
        </Text>
        <Ionicons size={16} name="headset" color="#FFF" />
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

  texto: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "700",
    position: "absolute",
    top: "45%",
    textTransform: "uppercase",
  },

  logochackes: {
    width: 200,
    opacity: 0.06,

    position: "absolute",
    top: "13%",
  },

  pontinhos: {
    color: "#4B92E5",
  },

  vazia: {
    flex: 1,
  },

  logotext: {},
});

export default Espera;
