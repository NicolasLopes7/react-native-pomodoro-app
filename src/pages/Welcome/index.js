import React, { useCallback, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

import Button from "../../components/Button";

import { styles } from "./styles";

export default function Welcome() {
  const [sessionTime, setSessionTime] = useState(sessionTime);
  const [restTime, setRestTime] = useState(restTime);
  const navigation = useNavigation();

  const navigateToTimer = useCallback(() => {
    console.log(sessionTime);
    console.log(restTime);
    navigation.navigate("Timer", {
      sessionTimeValue: sessionTime,
      restTimeValue: restTime,
    }),
      [navigation];
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomodora</Text>
      <LottieView
        loop={true}
        autoPlay={true}
        autoSize
        source={require("../../../assets/yoga.json")}
      />
      <Text style={styles.text}>
        Continuar Focado por muito tempo não é fácil!
      </Text>

      <TextInput
        style={styles.textInput}
        placeholder="tempo da sessão"
        onChangeText={(time) => {
          setSessionTime(time);
          console.log(time);
        }}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInput}
        placeholder="tempo de descanso"
        onChangeText={(time) => setRestTime(time)}
        keyboardType="numeric"
      />
      <Button
        text="Iniciar Sessão"
        icon="arrow-right"
        style={styles.button}
        onPress={navigateToTimer}
      />
    </View>
  );
}
