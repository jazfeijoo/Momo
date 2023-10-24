import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Audio } from "expo-av";

export default function AudioPlayer() {
  return (
    <>
      <Button>AUDIO BUTTON</Button>
    </>
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
