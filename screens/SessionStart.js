import { StyleSheet, SafeAreaView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, Button } from "react-native-paper";
import { useTranslation } from "react-i18next";

export default function Home() {
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
            {/* {t("welcome")} */} START SESSION
          </Text>
          <Button>Unclear for now</Button>
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
});
