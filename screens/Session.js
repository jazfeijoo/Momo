import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { useTranslation } from "react-i18next";
import AudioPlayer from "../components/AudioPlayer";

export default function Session() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <AudioPlayer />
        <Text variant="headlineSmall" style={styles.titleText}>
          IN MIDST OF SESSION
        </Text>
        <Text variant="bodyLarge" style={styles.instructionsText}>
          MOMO Sessions are meant to help provide a little reset for your
          nervous system.
        </Text>
        <Text variant="bodyLarge" style={styles.instructionsText}>
          This is why it's also encouraged to give your eyes a break during this
          time. Try to not look at your phone screen to minimize your exposure
          to blue UV light.
        </Text>
      </View>
    </SafeAreaView>
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
  instructionsText: {
    color: "#FFFFFF",
    fontWeight: 500,
    marginTop: 20,
  },
});
