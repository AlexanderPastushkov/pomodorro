import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  isTimerRunning: boolean;
  stopTimer: () => void;
  startTimer: () => void;
};

export const TimerToggleButton = ({
  isTimerRunning,
  stopTimer,
  startTimer,
}: Props) => {
  return (
    <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
      <View style={styles.container}>
        <FontAwesome
          style={styles.icon}
          name={isTimerRunning ? "pause" : "play"}
          size={125}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
    color: "#fff",
  },
  container: {
    borderWidth: 5,
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    justifyContent: "center",
    borderColor: "#fff",
    marginVertical: 50,
  },
});
