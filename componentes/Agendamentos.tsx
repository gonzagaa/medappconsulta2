import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Calendar } from "react-native-calendars";
import XDate from "xdate";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigation } from "../routes/user.route";
import { arrayRemove, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./Config";

const Agendamentos = ({
  route,
}: {
  route: { params: { nome: string; crm: string; medicoId: string } };
}) => {
  const navigation: StackNavigation = useNavigation();

  const { nome, crm, medicoId } = route.params;
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  console.log("Médico ID: ", medicoId);

  useEffect(() => {
    handler();
  }, [selectedDate, medicoId]);

  const handler = async () => {
    if (selectedDate && medicoId) {
      const docRef = doc(db, "medicos", medicoId, "datas", selectedDate);

      try {
        const documentSnapshot = await getDoc(docRef);
        console.log("Busca no Firestore retornou:", documentSnapshot.exists());

        if (documentSnapshot.exists()) {
          const horarios = documentSnapshot.data()?.horarios;
          console.log("Horários disponíveis:", horarios);

          if (horarios && horarios.length > 0) {
            setAvailableTimes(horarios);
          } else {
            console.log("Nenhum horário disponível para esta data.");
            setAvailableTimes([]);
          }
        } else {
          setAvailableTimes([]);
        }
      } catch (error) {
        console.error("Erro ao acessar os horários:", error);
      }
    }
  };

  XDate.locales["pt"] = {
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthNamesShort: [
      "Jan.",
      "Fev.",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul.",
      "Ago",
      "Set.",
      "Out.",
      "Nov.",
      "Dez.",
    ],
    dayNames: [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  };
  XDate.defaultLocale = "pt";

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Escolha o melhor dia e horário que irá realizar sua consulta
      </Text>

      <View style={styles.card}>
        <Text style={styles.medicoInfo}>Nome: {nome}</Text>
        <Text style={styles.crmInfo}>CRM: {crm}</Text>
      </View>

      <Calendar
        style={styles.calendar}
        current={selectedDate ? selectedDate : undefined}
        markedDates={{
          [selectedDate]: {
            selected: true,
            marked: true,
            selectedColor: "#4B92E5",
          },
        }}
        onDayPress={(day) => {
          console.log("Data selecionada:", day.dateString);
          setSelectedDate(day.dateString);
        }}
        theme={{
          backgroundColor: "#4B92E5",
          calendarBackground: "#f2f5f9",
          textSectionTitleColor: "#4B92E5",
          textSectionTitleDisabledColor: "#034677",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#034677",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#034677",
          selectedDotColor: "#ffffff",
          arrowColor: "#034677",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "#034677",
          textMonthFontWeight: "700",
          indicatorColor: "#034677",
          textDayFontFamily: "Montserrat",
          textMonthFontFamily: "Montserrat-Bold",
          textDayHeaderFontFamily: "Montserrat",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />

      <ScrollView style={styles.timeList}>
        {availableTimes.length > 0 ? (
          availableTimes.map((time, index) => (
            <TouchableOpacity
              activeOpacity={0.5} // Reduz a opacidade do botão quando pressionado
              key={index}
              style={styles.timeButton}
              onPress={async () => {
                const docRef = doc(
                  db,
                  "medicos",
                  medicoId,
                  "datas",
                  selectedDate
                );

                try {
                  await updateDoc(docRef, {
                    horarios: arrayRemove(time),
                  });
                  console.log("Horário reservado e atualizado no Firestore.");
                  navigation.navigate("Pagamento", {
                    nomeMedico: nome,
                    crmMedico: crm,
                    dataConsulta: selectedDate,
                    horaConsulta: time,
                    medicoId: medicoId,
                  });
                } catch (error) {
                  console.error("Erro ao atualizar horários:", error);
                  // Handle error, e.g., show a message to the user
                }
              }}
            >
              <Text style={styles.timeButtonText}>{time}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.textNenhum}>
            Nenhum horário disponível para esta data!
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingHorizontal: 25,
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  medicoInfo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },

  crmInfo: {
    fontSize: 14,
    fontWeight: "300",
    color: "#fff",
    marginBottom: 6,
  },

  card: {
    paddingVertical: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#034677",
    marginBottom: 20,

    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
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

  calendar: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4b92f5",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  textNenhum: {
    color: "red",
    textAlign: "center",
    fontSize: RFValue(12),
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    borderRadius: 15,
    fontWeight: "300",
  },

  timeList: {
    marginTop: 20,
    flex: 1,
  },

  timeButton: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4B92E5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,

    elevation: 3,
  },
  timeButtonText: {
    color: "#034677",
    fontSize: 16,
    fontWeight: "600",
  },

  botaohorarios: {
    color: "#4B92E5",
    backgroundColor: "#4B92E5",
  },
});

export default Agendamentos;
