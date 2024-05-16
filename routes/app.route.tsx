import React from "react";
import { StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../componentes/Details";
import Principal from "../componentes/Principal";
import ListarMedicos from "../componentes/Listadoc";
import Testcam from "../componentes/Testecam";
import Espera from "../Pages/Consulta/Espera";
import Suporte from "../Pages/MenuPrincipal/Suporte";
import Perfil from "../Pages/MenuPrincipal/Perfil";
import NenhumaConsulta from "../Pages/MenuPrincipal/NenhumaConsulta";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// @ts-ignore
import lgimage from ".././Image/lgimage.png";

import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../Pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Agendamentos from "../componentes/Agendamentos";
import ContaCriada from "../componentes/Contacriada";
import Pagamento from "../Pages/Pagamento/Pagamentos";
import Consultas from "../Pages/MenuPrincipal/Consultas";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

function MenuTab() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarInactiveTintColor: "#034677",
        tabBarActiveTintColor: "#4b92e5",
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 90,
          backgroundColor: "#fff",
          borderTopStartRadius: 25,
          borderTopEndRadius: 25,
          borderWidth: 0.5,
          borderColor: "#4B92E5",
          borderTopWidth: 3,
          borderTopColor: "#4B92E5",
          paddingBottom: 20,
        },
      }}
    >
      <Tab.Screen
        name="Consultas"
        component={Consultas}
        options={{
          headerShown: true,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
          tabBarStyle: {
            display: "none",
          },
        }}
      />

      <Tab.Screen
        name="Feed"
        component={Principal}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.viewimage}>
                <Image
                  source={lgimage}
                  style={styles.imagemmodal}
                  resizeMode="contain"
                ></Image>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Listarmedicos"
        component={ListarMedicos}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="headset-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export type RootStackParamList = {
  HomeScreen: any;
  Details: any;
  ContaCriada: any;
  Principal: any;
  ListarMedicos: any;
  Agendamentos: {
    nome: string;
    crm: string;
    medicoId: string;
  };
  Pagamento: {
    nomeMedico: string;
    crmMedico: string;
    dataConsulta: string;
    horaConsulta: string;
    medicoId: string;
  };
  Testcam: any;
  Perfil: any;
  Consultas: any;
};

export const Stack = createStackNavigator<RootStackParamList>();
export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

export function NavigationApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: true,
            headerTintColor: "#034677",
            headerTitle: "",
            headerBackTitle: "Voltar",

            headerStyle: {
              backgroundColor: "white",
              borderBottomWidth: 0.3,
              borderBottomColor: "#034677",
            },
          }}
        />

        <Stack.Screen
          name="ContaCriada"
          component={ContaCriada}
          options={{
            headerShown: false,
            headerTintColor: "#034677",
            headerTitle: "",
            headerBackTitle: "Voltar",

            headerStyle: {
              backgroundColor: "white",
              borderBottomWidth: 0.3,
              borderBottomColor: "#034677",
            },
          }}
        />

        <Stack.Screen
          name="Principal"
          component={MenuTab}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ListarMedicos"
          component={ListarMedicos}
          options={{
            headerShown: true,
            headerTintColor: "#034677",
            headerTitle: "Atendimento Médico",
            headerBackTitle: "Voltar",
            headerStyle: {
              backgroundColor: "white",
              borderBottomWidth: 0.3,
              borderBottomColor: "#034677",
            },
          }}
        />

        <Stack.Screen
          name="Agendamentos"
          component={Agendamentos}
          options={{
            headerShown: true,
            headerTintColor: "#034677",
            headerTitle: "Agendar Consulta",
            headerBackTitle: "Voltar",
          }}
        />

        <Stack.Screen
          name="Pagamento"
          component={Pagamento}
          options={{
            headerShown: true,
            headerTintColor: "#034677",
            headerTitle: "Pagamento",
            headerBackTitle: "Voltar",
          }}
        />

        <Stack.Screen
          name="Testcam"
          component={Testcam}
          options={{
            headerShown: true,
            headerTintColor: "#034677",
            headerTitle: "Atendimento Médico",
            headerBackTitle: "Voltar",

            headerStyle: {
              backgroundColor: "white",
              borderBottomWidth: 0.3,
              borderBottomColor: "#034677",
            },
          }}
        />

        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            headerShown: true,
            headerTintColor: "#034677",
            headerTitle: "",
            headerBackTitle: "Voltar",

            headerStyle: {
              backgroundColor: "white",
              borderBottomWidth: 0.3,
              borderBottomColor: "#034677",
            },
          }}
        />

        <Stack.Screen
          name="Consultas"
          component={Consultas}
          options={{
            headerShown: true,
            headerTintColor: "#034677",
            headerTitle: "",
            headerBackTitle: "Voltar",

            headerStyle: {
              backgroundColor: "white",
              borderBottomWidth: 0.3,
              borderBottomColor: "#034677",
            },
          }}
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
