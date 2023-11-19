import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Keyboard, SafeAreaView } from "react-native";
import { FOCUS_TIME_MINUTES } from "./src/constants/constants";
import { TimerCountDownDisplay } from "./src/components/Timer/TimerCountDownDisplay";
import { TimerToggleButton } from "./src/components/Timer/TimerToggleButton";
import {
  TimerModeDisplay,
  TimerModes,
} from "./src/components/Timer/TimerModeDisplay";
import { TimerInput } from "./src/components/Timer/TimerInput";

export default function App() {
  const [timerCount, setTimerCount] = useState<number>(0);
  const [timerInterval, setTimerInerval] = useState<NodeJS.Timeout | null>(
    null
  );
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerMode, setTimerMode] = useState<TimerModes>("Focus");
  const [number, setNumber] = useState("");

  const setFocusTime = (inputNumber: number) => {
    return inputNumber * 60 * 1000;
  };

  useEffect(() => {
    if (timerCount === 0) {
      if (timerMode === "Focus") {
        setTimerMode("Break");
        setTimerCount(setFocusTime(Number(number.replace(",", "."))));
      } else {
        setTimerMode("Focus");
        setTimerCount(setFocusTime(Number(number.replace(",", "."))));
      }
      stopTimer();
    }
  }, [timerCount]);

  const handleCounter = () => {
    Keyboard.dismiss();
    setTimerCount(setFocusTime(Number(number.replace(",", "."))));
  };
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
    <SafeAreaView
      style={{
        ...styles.container,
        ...{ backgroundColor: timerMode === "Break" ? "#2a9d8f" : "#d95505" },
      }}
    >
      <TimerInput
        timerMode={timerMode}
        setNumber={setNumber}
        number={number}
        handleCounter={handleCounter}
      />
      <TimerModeDisplay timerMode={timerMode} />
      <StatusBar style="auto" />
      <TimerToggleButton
        startTimer={startTimer}
        stopTimer={stopTimer}
        isTimerRunning={isTimerRunning}
      />
      <TimerCountDownDisplay timerDate={timerDate} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
