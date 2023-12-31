import React from "react";
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useTranslation } from "react-i18next";

export default function SessionFrequency({ navigation, setMusicFrequency }) {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text variant="headlineMedium" style={styles.titleText}>
          {t("session-start-which-freq")}
        </Text>
        <Text variant="bodyLarge" style={styles.instructionsText}>
          {t("session-start-freq-subtext")}
        </Text>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => {
            setMusicFrequency("0-3");
            navigation.navigate("Session");
          }}
        >
          <Text style={styles.optionText}>{t("option-text-0to3HZ")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => {
            setMusicFrequency("4-13");
            navigation.navigate("Session");
          }}
        >
          <Text style={styles.optionText}>{t("option-text-4to13HZ")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => {
            setMusicFrequency("14-30");
            navigation.navigate("Session");
          }}
        >
          <Text style={styles.optionText}>{t("option-text-14to30HZ")}</Text>
        </TouchableOpacity>
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
    padding: 10,
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
    marginTop: 30,
    marginBottom: 20,
  },
  optionText: {
    width: "90%",
    fontSize: 18,
    color: "#FFFFFF",
    margin: "auto",
    padding: "auto",
  },
  optionButton: {
    marginBottom: 15,
    height: 80,
    width: "88%",
    backgroundColor: "#8E9D8F",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#174d61",
    justifyContent: "center",
    alignItems: "center",
  },
});
