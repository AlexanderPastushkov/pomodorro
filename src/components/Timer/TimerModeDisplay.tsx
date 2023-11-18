import { StyleSheet, Text, View } from "react-native";
import React from "react";

export type TimerModes = "Focus" | "Break";

type Props = {
  timerMode: TimerModes;
};

export const TimerModeDisplay = ({ timerMode }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {timerMode} Time {timerMode == "Focus" ? "🍅" : "🥦"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontSize: 40,
    fontWeight: "800",
    color: "#fff",
  },
});
