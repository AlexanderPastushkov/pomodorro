import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";
import { TimerModes } from "./TimerModeDisplay";

type Props = {
  timerMode: TimerModes;
  setNumber: any;
  number: string;
  handleCounter: () => void;
};

export const TimerInput = ({
  timerMode,
  setNumber,
  number,
  handleCounter,
}: Props) => {
  return (
    <>
      <View>
        <Text style={styles.text}>{timerMode} time min.</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      {/* <Text>{number}</Text> */}
      <Pressable
        style={{
          ...styles.button,
          ...{ backgroundColor: timerMode === "Break" ? "#1fc4b0" : "#f75402" },
        }}
        onPress={handleCounter}
      >
        <Text style={styles.text}>Set {timerMode} TIMER</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#fff",
    borderColor: "#fff",
  },
  text: {
    color: "#fff",
  },
  button: {
    padding: 8,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: "#fff",
  },
});
