import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { Button } from "react-native-paper";
import { useTranslation } from "react-i18next";

import { useState } from "react";
import { Button, Text } from "@ui-kitten/components";
// import { Text } from "react-native-paper";

export default function Home() {
  const { t } = useTranslation();
  const [musicFreq, setMusicFreq] = useState(null);

  const text_0to3 =
    "0- 3HZ: deep sleep, dreaming, reduce stress, and so onnnnnn and so sonnnnn, helllooooo";
  // const text_0to3 = "0- 3HZ:\n\ndeep sleep, dreaming, reduce stress";

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

          <Button
            style={styles.optionButton}
            appearance="ghost"
            textStyle={{ color: "#db9acb" }}
          >
            <Text style={styles.optionText}>
              0- 3HZ: deep sleep, dreaming, reduce stress, and so onnnnnn, and
              so onnnnnn and so sonnnnn, helllooooo, friend
            </Text>
          </Button>
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
    // justifyContent: "center",
    marginLeft: 13,
    marginRight: 13,
    height: "100%",
  },
  questionText: {
    color: "#164657",
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 30,
  },
  optionText: {
    // width: "100%",
    fontSize: 40,
  },
  optionButton: {
    margin: 2,
    // height: "100%",
    // width: "80%",
    // marginLeft: 50,
    // marginRight: 50,
    backgroundColor: "#dbb99a",
    borderWidth: 2,
    borderColor: "#08678f",
  },
});
