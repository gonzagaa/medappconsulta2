import React from "react";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import fotoMedico from "../../Image/fotomedico.jpg";
import fotoMedica from "../../Image/fotomedica.jpg";
import HomeScreen from ".";
import { StackNavigation } from "../../routes/user.route";
import { useNavigation } from "@react-navigation/native";

const Consultas = () => {
  const navigation: StackNavigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consultas</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttom}>
          <Text style={styles.textButtom}>Realizadas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttom}>
          <Text style={styles.textButtom}>Agendadas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttom}>
          <Text style={styles.textButtom}>Canceladas</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.principal}>
        <View style={styles.card}>
          <View style={styles.contentCard}>
            <View style={styles.viewFotoMedico}>
              <Image
                source={fotoMedico}
                style={styles.fotoMedico}
                resizeMode="contain"
              ></Image>
            </View>

            <View style={styles.detalhesCard}>
              <View style={styles.headerCard}>
                <Text style={styles.tituloCard}>Dr. Gonzaguinha</Text>
                <Text style={styles.subTituloCard}>Clinico Geral</Text>
              </View>

              <View style={styles.paragraphys}>
                <Text style={styles.paragraphy}>
                  Consulta{" "}
                  <Text style={styles.paragraphySpanStatus}>Realizada</Text>
                </Text>
                <Text style={styles.paragraphy}>
                  Data: <Text style={styles.paragraphySpan}>18/12/24</Text>
                </Text>
                <Text style={styles.paragraphy}>
                  Horario: <Text style={styles.paragraphySpan}>14h30</Text>
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.buttonAnexos}>
            <Text style={styles.textButtonAnexos}>Anexos da Consulta</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <View style={styles.contentCard}>
            <View style={styles.viewFotoMedico}>
              <Image
                source={fotoMedica}
                style={styles.fotoMedico}
                resizeMode="contain"
              ></Image>
            </View>

            <View style={styles.detalhesCard}>
              <View style={styles.headerCard}>
                <Text style={styles.tituloCard}>Dr. Gonzaguinha</Text>
                <Text style={styles.subTituloCard}>Clinico Geral</Text>
              </View>

              <View style={styles.paragraphys}>
                <Text style={styles.paragraphy}>
                  Consulta{" "}
                  <Text style={styles.paragraphySpanStatus}>Realizada</Text>
                </Text>
                <Text style={styles.paragraphy}>
                  Data: <Text style={styles.paragraphySpan}>18/12/24</Text>
                </Text>
                <Text style={styles.paragraphy}>
                  Horario: <Text style={styles.paragraphySpan}>14h30</Text>
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.buttonAnexos}>
            <Text style={styles.textButtonAnexos}>Anexos da Consulta</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <View style={styles.contentCard}>
            <View style={styles.viewFotoMedico}>
              <Image
                source={fotoMedico}
                style={styles.fotoMedico}
                resizeMode="contain"
              ></Image>
            </View>

            <View style={styles.detalhesCard}>
              <View style={styles.headerCard}>
                <Text style={styles.tituloCard}>Dr. Gonzaguinha</Text>
                <Text style={styles.subTituloCard}>Clinico Geral</Text>
              </View>

              <View style={styles.paragraphys}>
                <Text style={styles.paragraphy}>
                  Consulta{" "}
                  <Text style={styles.paragraphySpanStatus}>Realizada</Text>
                </Text>
                <Text style={styles.paragraphy}>
                  Data: <Text style={styles.paragraphySpan}>18/12/24</Text>
                </Text>
                <Text style={styles.paragraphy}>
                  Horario: <Text style={styles.paragraphySpan}>14h30</Text>
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.buttonAnexos}>
            <Text style={styles.textButtonAnexos}>Anexos da Consulta</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          style={{
            marginTop: 40,
            paddingBottom: 80,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons size={18} name="arrow-back-outline" color="#4b92e5" />

          <Text
            style={{
              color: "#4b92e5",
              fontSize: 18,
              textAlign: "center",
              fontFamily: "Montserrat",
              marginLeft: 10,
              fontWeight: "600",
            }}
          >
            Voltar ao inicio
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    textAlign: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  titulo: {
    fontFamily: "Monteserrat",
    fontSize: 24,
    color: "#034677",
    fontWeight: "700",
    width: "100%",
    textAlign: "center",

    marginBottom: 30,
    marginTop: 10,
  },

  buttons: {
    flexDirection: "row",
    gap: 14,
    width: "100%",
    justifyContent: "center",
    paddingBottom: 20,

    borderBottomWidth: 2,
    borderBottomColor: "#034677",
  },

  buttom: {
    paddingVertical: 8,
    backgroundColor: "#f7f7f7",
    borderWidth: 1,
    borderColor: "#034677",
    borderRadius: 40,
    flex: 1,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.65,
  },

  textButtom: {
    fontSize: 16,
    color: "#034677",
  },

  principal: {
    width: "100%",
    paddingTop: 30,
  },

  contentCard: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 16,
  },

  viewFotoMedico: {
    flex: 0.4,
    backgroundColor: "#000000",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
  },

  fotoMedico: {
    width: "100%",
    height: 190,
    objectFit: "cover",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#034677",
  },

  detalhesCard: {
    flex: 0.6,
  },

  card: {
    padding: 20,
    borderWidth: 2,
    borderColor: "#034677",
    borderRadius: 10,
    borderTopWidth: 10,
    backgroundColor: "#f7f7f7",
    width: "100%",

    marginBottom: 30,
  },

  tituloCard: {
    fontSize: 20,
    color: "#034677",
    fontFamily: "Montserrat",
    fontWeight: "700",
    marginBottom: 4,
  },

  subTituloCard: {
    fontSize: 16,
    color: "#034677",
    fontFamily: "Montserrat",
    fontWeight: "300",
  },

  paragraphys: {
    gap: 15,
    width: "100%",

    marginTop: 30,
    marginBottom: 15,
  },

  paragraphy: {
    fontSize: 14,
    color: "#034677",
    fontFamily: "Montserrat",
    fontWeight: "600",
  },

  paragraphySpanStatus: {
    fontWeight: "400",
    color: "green",
  },

  paragraphySpan: {
    fontWeight: "400",
  },

  buttonAnexos: {
    paddingVertical: 12,
    width: "100%",
    backgroundColor: "#4B92E5",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
  },

  textButtonAnexos: {
    fontFamily: "Montserrat",
    fontWeight: "600",
    color: "white",
    fontSize: 14,
    textTransform: "uppercase",
  },

  headerCard: {
    
  }
});

export default Consultas;
