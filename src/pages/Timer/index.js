import React, { useState, useEffect, useMemo, useCallback } from "react";
import { View, Text, TextInput } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FAB from "../../components/FAB";

import { styles } from "./styles";

export default function Timer({ route }) {
  const { sessionTimeValue, restTimeValue } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [secondsEllapsed, setSecondsEllapsed] = useState(0);
  const [sessionTime] = useState(sessionTimeValue ? sessionTimeValue : 25);
  const [restTime] = useState(restTimeValue ? restTimeValue : 5);

  const navigation = useNavigation();

  const progress = useMemo(() => (100 * secondsEllapsed) / 60, [
    secondsEllapsed,
  ]);
  const formatedTimeEllapsed = useMemo(() => {
    if (secondsEllapsed > 60) {
      console.log(Math.floor(secondsEllapsed / 60));
      return Math.floor(secondsEllapsed / 60);
    }

    return secondsEllapsed;
  }, [secondsEllapsed]);
  const timeUnity = useMemo(() => {
    if (secondsEllapsed <= 60) {
      return "segundos";
    } else if (secondsEllapsed > 60 && secondsEllapsed <= 120) {
      return "minuto";
    } else {
      return "minutos";
    }
  }, [secondsEllapsed]);
  const FABIcon = useMemo(() => (isPlaying ? "pause" : "play"), [isPlaying]);

  const handleToggleTimer = useCallback(() => setIsPlaying(!isPlaying), [
    isPlaying,
  ]);
  const onAnimationComplete = useCallback(() => {
    if (secondsEllapsed / 60 > sessionTime) {
      setSecondsEllapsed(0);
      setIsPlaying(false);
      navigation.navigate("Congrats");
    }
  }, [secondsEllapsed, navigation]);

  useEffect(() => {
    if (isPlaying) {
      const time = setInterval(() => {
        setSecondsEllapsed(secondsEllapsed + 1);
      }, 1000);

      return () => {
        clearInterval(time);
      };
    }
  }, [isPlaying, secondsEllapsed]);
  {
    console.log(progress);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomodora</Text>
      <AnimatedCircularProgress
        size={260}
        width={5}
        fill={progress}
        rotation={0}
        style={styles.progressContainer}
        tintColor="#FB3D71"
        backgroundColor="#F9FBF2"
        onAnimationComplete={onAnimationComplete}
      >
        {() => (
          <View style={styles.timeContainer}>
            <Text style={styles.timeEllapsed}>{formatedTimeEllapsed}</Text>
            <Text style={styles.timeUnity}>{timeUnity}</Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <View style={styles.timerSettingsContainer}>
        <View style={styles.timerSettingsOption}>
          <MaterialCommunityIcons name="briefcase" size={24} color="#FB3D71" />
          <Text style={styles.timeText}>{sessionTime} min</Text>
        </View>
        <View style={styles.timerSettingsOption}>
          {/* #7F7EFF */}
          <MaterialCommunityIcons name="update" size={24} color="#FB3D71" />
          <Text style={styles.timeText}>{restTime} min</Text>
        </View>
      </View>
      <FAB name={FABIcon} onPress={handleToggleTimer} />
    </View>
  );
}
