import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, Button } from "react-native-paper";
import { useTranslation } from "react-i18next";
// import { Button } from "@react-native-material/core";

export default function Home() {
  const { t } = useTranslation();
  const [musicFreq, setMusicFreq] = useState(null);

  // const text_0to3 =
  //   "0- 3HZ: deep sleep, dreaming, reduce stress, and so onnnnnn and so sonnnnn, helllooooo";
  //  const text_0to3 = "0- 3HZ:\n\ndeep sleep, dreaming, reduce stress";

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        locations={[0, 0.1, 0.3, 0.7, 0.9, 1]}
        colors={[
          "#d1c3b2",
          "#bababa",
          "#96adb5",
          "#96adb5",
          "#bababa",
          "#d1c3b2",
        ]}
        style={styles.background}
      >
        <View style={styles.main}>
          <Text variant="headlineMedium" style={styles.questionText}>
            {t("session-start-which-freq")}
          </Text>
          <Text variant="bodyLarge" style={styles.questionSubText}>
            {t("session-start-freq-subtext")}
          </Text>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>{t("option-text-0to3HZ")}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>{t("option-text-4to13HZ")}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>{t("option-text-14to30HZ")}</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  main: {
    marginTop: 40,
    alignItems: "center",
    marginLeft: 13,
    marginRight: 13,
    height: "100%",
  },
  questionText: {
    color: "#164657",
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 10,
  },
  questionSubText: {
    color: "#164657",
    fontWeight: 400,
    marginBottom: 20,
  },
  optionText: {
    width: "90%",
    fontSize: 18,
    color: "#164657",
    margin: "auto",
    padding: "auto",
  },
  optionButton: {
    marginBottom: 15,
    height: 75,
    width: "90%",
    backgroundColor: "#ded5cc",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#08678f",
    justifyContent: "center",
    alignItems: "center",
  },
});
