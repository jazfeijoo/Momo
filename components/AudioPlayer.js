import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";

export default function Session() {
  return (
    <Text variant="headlineMedium" style={styles.titleText}>
      AUDIO PLAYER HERE
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#425A4D",
    width: "100%",
    height: "100%",
  },
  main: {
    alignItems: "center",
    padding: 12,
    minHeight: "100%",
    width: "95%",
  },
  titleText: {
    color: "#FFFFFF",
    fontWeight: 700,
    marginTop: 50,
  },
});
