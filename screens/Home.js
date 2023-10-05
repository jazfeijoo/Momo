import { StyleSheet, SafeAreaView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, Button } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Home({ navigation }) {
  const { t } = useTranslation();
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
          <Text variant="headlineLarge" style={styles.welcomeText}>
            {t("welcome")}
          </Text>

          <Text variant="titleLarge" style={styles.introText}>
            {t("home-intro-language")}
          </Text>
          <Text variant="titleLarge" style={styles.introText}>
            {t("home-intro-to-begin")}
          </Text>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("SessionStart")}
            style={styles.beginButton}
            labelStyle={styles.beginButtonText}
            compact={true}
          >
            {t("begin")}
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
    // width: "100%",
    // height: "100%",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  welcomeText: {
    color: "#164657",
    fontWeight: 700,
    marginTop: 20,
  },
  introText: {
    color: "#164657",
    fontWeight: 600,
    opacity: 0.8,
    marginTop: 25,
    marginTop: 30,
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 13,
    marginRight: 13,
  },
  beginButton: {
    marginTop: 45,
    width: "37%",
    height: "13%",
    textAlign: "center",
    backgroundColor: "#186588",
  },
  beginButtonText: {
    color: "#d1c3b2",
    paddingTop: 10,
    margin: "auto",
    fontSize: 22,
  },
});
