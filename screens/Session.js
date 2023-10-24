import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";
import { useTranslation } from "react-i18next";
import AudioPlayer from "../components/AudioPlayer";

export default function Session() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text variant="headlineMedium" style={styles.titleText}>
          SESSION SCREEN HERE
        </Text>
        <AudioPlayer />
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
});
