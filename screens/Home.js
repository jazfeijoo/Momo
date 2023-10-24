import { StyleSheet, SafeAreaView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, Button } from "react-native-paper";
import { useTranslation } from "react-i18next";

export default function Home({ navigation }) {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      {/* <LinearGradient
        locations={[0, 0.2, 0.8, 1]}
        colors={["#0f0e0c", "#0f0e0c", "#0f0e0c", "#0f0e0c"]}
        style={styles.background}
      > */}
      <View style={styles.main}>
        <Text variant="headlineLarge" style={styles.titleText}>
          {t("welcome")}
        </Text>

        <Text variant="titleLarge" style={styles.instructionsText}>
          {t("home-intro-language")}
        </Text>
        <Text variant="titleLarge" style={styles.instructionsText}>
          {t("home-intro-to-begin")}
        </Text>
        <Button
          // mode="contained"
          onPress={() => navigation.navigate("SessionStart")}
          style={styles.beginButton}
          labelStyle={styles.beginButtonText}
          // compact={true}
        >
          {t("begin")}
        </Button>
      </View>
      {/* </LinearGradient> */}
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
  background: {
    width: "100%",
    height: "100%",
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

  beginButton: {
    marginTop: 40,
    width: "50%",
    height: "9%",
    textAlign: "center",
    backgroundColor: "#8E9D8F",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "#174d61",
  },
  beginButtonText: {
    color: "#FFFFFF",
    paddingTop: 16,
    margin: "auto",
    fontSize: 30,
  },
});
