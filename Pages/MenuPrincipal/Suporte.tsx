import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import logo from "../../Image/lgimage.png";
import { StackNavigation } from "../../routes/user.route";

const Suporte = () => {
  const navigation: StackNavigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>SUPORTE</Text>

      <View>
        <TouchableOpacity style={styles.card}>
          <View style={styles.icone}>
            <Ionicons name="logo-whatsapp" size={30} color={"white"} />
          </View>
          <View>
            <Text style={styles.textCard}>Suporte pelo WhatsApp</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.icone}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={30}
              color={"white"}
            />
          </View>
          <View>
            <Text style={styles.textCard}>Suporte pelo ChatBot</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.icone}>
            <Ionicons name="help-outline" size={30} color={"white"} />
          </View>
          <View>
            <Text style={styles.textCard}>Duvidas Frequentes</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Image
        source={logo}
        style={styles.logochackes}
        resizeMode="contain"
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 25,
    backgroundColor: "#fff",
  },

  titulo: {
    fontFamily: "Monteserrat",
    fontSize: 24,
    marginLeft: 4,
    color: "#034677",
    fontWeight: "700",
    width: "100%",
    marginTop: 40,
    marginBottom: 40,
    textAlign: "center",
  },

  card: {
    paddingVertical: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    borderColor: "#034677",
    backgroundColor: "#f3f3f3",
    marginBottom: 20,
    opacity: 0.8,

    flexDirection: "row",
    gap: 4,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.65,
  },

  textCard: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },

  icone: {
    backgroundColor: "#034677",
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  logochackes: {
    width: 250,
    opacity: 0.2,
    position: "absolute",
    transform: [{ translateX: 85 }],
    bottom: "20%",
    zIndex: -1,
  },
});

export default Suporte;
