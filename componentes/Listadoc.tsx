import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { StackNavigation } from "../routes/user.route";
import { useNavigation } from "@react-navigation/native";

import { query, collection, where, onSnapshot } from "firebase/firestore";

import { db } from "./Config";

const ListarMedicos = () => {
  const navigation: StackNavigation = useNavigation();

  const [medicos, setMedicos] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(db, "medicos"), where("disponivel", "==", true));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const medicosArray: any[] = [];
      querySnapshot.forEach((documentSnapshot) => {
        medicosArray.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      setMedicos(medicosArray);
    });

    // Limpar subscription ao desmontar
    return () => unsubscribe();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Escolha o médico que irá realizar o seu atendimento
      </Text>
      <FlatList
        data={medicos}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Agendamentos", {
                medicoId: item.key,
                nome: item.nome,
                crm: item.crm,
              })
            }
          >
            <View style={styles.iconeMedico}>
              <Ionicons name="person-outline" size={30} color={"white"} />
            </View>
            <View>
              <Text style={styles.nomeMedico}>{item.nome}</Text>
              <Text style={styles.crmMedico}>CRM: {item.crm}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 25,
  },

  titulo: {
    fontFamily: "Monteserrat",
    fontSize: 19,
    marginLeft: 4,
    color: "#034677",
    fontWeight: "400",
    letterSpacing: 1.1,
    width: "100%",
    marginBottom: 40,
    textAlign: "center",
  },

  card: {
    paddingVertical: 15,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: "#034677",

    marginBottom: 20,

    flexDirection: "row",
    alignItems: "center",
  },

  nomeMedico: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#034677",
    marginBottom: 6,
  },

  crmMedico: {
    fontSize: 14,
    fontWeight: "300",
    color: "#034677",
    marginBottom: 6,
    shadowOpacity: 0,
  },

  iconeMedico: {
    backgroundColor: "#4B92E5",
    height: 50,
    width: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
});

export default ListarMedicos;
