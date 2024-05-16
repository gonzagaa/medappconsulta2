import React from "react";
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'


import logo from '../../Image/lgimage.png';


const NenhumaConsulta = ({ navigation }) => {

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

       <View style={styles.principal}>
        <Image source={logo} style={styles.logochackes} resizeMode='contain'></Image>
        <Text style={styles.texto}>NENHUMA CONSULTA (NOME VARIAVEL)<Text style={styles.pontinhos}>...</Text></Text>
       </View>

        <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
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
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingBottom: 70,
      backgroundColor: "#fff",
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
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
      marginTop: 70,
    },

    buttons: {
      flexDirection: "row",
      gap: 14,
      width: "100%",
      justifyContent: "center"
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
      alignItems: "center",
      justifyContent: "center"
    },

    texto: {
        textAlign: "center",
        fontSize: 25,
        color: "#034677",
        fontFamily: 'Montserrat', 
        fontWeight: '700',
        position: "absolute",
        top: "45%",
        textTransform: "uppercase",
    },

    logochackes:{
      width: 200,
      opacity: .06,

     
    },

    pontinhos:{
        color: '#4B92E5',
        
    },

    logotext:{
        
    }
  });

export default NenhumaConsulta;