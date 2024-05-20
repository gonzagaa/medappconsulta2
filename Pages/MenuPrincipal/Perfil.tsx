import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,

} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons';


import logo from '../../Image/lgimage.png';
import carinha from '../../Image/carinhaperfil.png';
import logoLarge from '../../Image/logomednome.png';
import { StackNavigation } from "../../routes/user.route";

const Perfil = () => {
  const navigation: StackNavigation = useNavigation();


  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Image style={styles.ftcarinha} source={carinha} resizeMode='contain' ></Image>

        <Text style={styles.titulo}>
            Gonzaguinha
        </Text>

      </View>

        <ScrollView>
        
          <TouchableOpacity style={styles.card}>
                <View>
                    <Text style={styles.textCard}>Consultas</Text>
                    <Text style={styles.subtextCard}>Histórico de Consultas</Text>
                </View>
                <View style={styles.icone}>
                    <Ionicons name="chevron-forward-outline" size={30} color={"#034677"} />
                </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
                <View>
                    <Text style={styles.textCard}>Senha</Text>
                    <Text style={styles.subtextCard}>Alterar senha</Text>
                </View>
                <View style={styles.icone}>
                    <Ionicons name="chevron-forward-outline" size={30} color={"#034677"} />
                </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
                <View>
                    <Text style={styles.textCard}>Pagamentos</Text>
                    <Text style={styles.subtextCard}>Meu saldo e cartões</Text>
                </View>
                <View style={styles.icone}>
                    <Ionicons name="chevron-forward-outline" size={30} color={"#034677"} />
                </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
                <View>
                    <Text style={styles.textCard}>Cupons</Text>
                    <Text style={styles.subtextCard}>Meus cupons de desconto</Text>
                </View>
                <View style={styles.icone}>
                    <Ionicons name="chevron-forward-outline" size={30} color={"#034677"} />
                </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
                <View>
                    <Text style={styles.textCard}>Meus dados</Text>
                    <Text style={styles.subtextCard}>Vizualizar e editar informações</Text>
                </View>
                <View style={styles.icone}>
                    <Ionicons name="chevron-forward-outline" size={30} color={"#034677"} />
                </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
                <View>
                    <Text style={styles.textCard}>Assinaturas</Text>
                    <Text style={styles.subtextCard}>Minhas assinaturas</Text>
                </View>
                <View style={styles.icone}>
                    <Ionicons name="chevron-forward-outline" size={30} color={"#034677"} />
                </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
                <View>
                    <Text style={styles.textCard}>Suporte</Text>
                    <Text style={styles.subtextCard}>Tire suas duvidas</Text>
                </View>
                <View style={styles.icone}>
                    <Ionicons name="chevron-forward-outline" size={30} color={"#034677"} />
                </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSair}>
            <Text style={styles.textButtonSair}>
                Sair da conta
            </Text>
          </TouchableOpacity>
        
          <Image source={logoLarge} style={styles.logoLarge} resizeMode='contain'></Image>

        </ScrollView>

        <Image source={logo} style={styles.logochackes} resizeMode='contain'></Image>
      
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

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 30,
    paddingLeft: 16,
    borderLeftColor: "#034677",
    borderLeftWidth: 4,
  },

  titulo: {
    fontFamily: "Monteserrat",
    fontSize: 24,
    color: "#034677",
    fontWeight: "700",
    width: "100%",
  },

  icone: {

  },

  ftcarinha:{
    width: 60,
  },

  card: {
    paddingVertical: 14,
    borderWidth: 2,
    padding: 16,
    borderRadius: 15,
    borderColor: "#034677",
    backgroundColor: "#f7f7f7",
    marginBottom: 10,
    opacity: .9,

    flexDirection: "row",
    justifyContent: "space-between",
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
    fontSize: 22,
    fontWeight: "600",
    color: "#034677",
    marginBottom: 4,
  },

  subtextCard: {
    fontSize: 14,
    fontWeight: "400",
    color: "#034677",
  },

  logochackes:{
    width: 250,
    opacity: .2,
    position: "absolute",
    transform: [{translateX: 85}],
    bottom: "20%",
    zIndex: -1,
  },

  buttonSair: {
    marginTop: 30,
    marginHorizontal: "auto",
    paddingBottom: 5,
    borderBottomColor: "#eb5757",
    borderBottomWidth: 1.5,
  },

  textButtonSair: {
    fontSize: 18,
    color: "#EB5757",
  },

  logoLarge: {
    marginHorizontal: "auto",
    marginVertical: 40,
    opacity: .6,
    width: 150,
  }
});

export default Perfil;
