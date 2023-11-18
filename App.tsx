import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  BREAK_TIME_MINUTES,
  FOCUS_TIME_MINUTES,
} from "./src/constants/constants";
import { TimerCountDownDisplay } from "./src/components/Timer/TimerCountDownDisplay";
import { TimerToggleButton } from "./src/components/Timer/TimerToggleButton";
import {
  TimerModeDisplay,
  TimerModes,
} from "./src/components/Timer/TimerModeDisplay";

export default function App() {
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES);
  const [timerInterval, setTimerInerval] = useState<NodeJS.Timer | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerMode, setTimerMode] = useState<TimerModes>("Focus");
  useEffect(() => {
    if (timerCount === 0) {
      if (timerMode === "Focus") {
        setTimerMode("Break");
        setTimerCount(BREAK_TIME_MINUTES);
      } else {
        setTimerMode("Focus");
        setTimerCount(FOCUS_TIME_MINUTES);
      }
      stopTimer();
    }
  }, [timerCount]);

  const startTimer = () => {
    setIsTimerRunning(true);
    const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000);
    setTimerInerval(id);
  };
  const stopTimer = () => {
    if (timerInterval !== null) {
      clearInterval(timerInterval);
      setIsTimerRunning(false);
    }
  };

  const timerDate = new Date(timerCount);

  return (
    <View
      style={{
        ...styles.container,
        ...{ backgroundColor: timerMode == "Break" ? "#2a9d8f" : "#d95505" },
      }}
    >
      <TimerModeDisplay timerMode={timerMode} />
      <StatusBar style="auto" />
      <TimerToggleButton
        startTimer={startTimer}
        stopTimer={stopTimer}
        isTimerRunning={isTimerRunning}
      />
      <TimerCountDownDisplay timerDate={timerDate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d95505",
    alignItems: "center",
    justifyContent: "center",
  },
});
