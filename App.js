import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Home from "./client/Home";
import NavBar from "./client/NavBar";
import { useState } from "react";

export default function App() {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  return (
    <PaperProvider>
      <View style={styles.container}>
        <NavBar
          showLanguageMenu={showLanguageMenu}
          setShowLanguageMenu={setShowLanguageMenu}
          setCurrentLanguage={setCurrentLanguage}
          currentLanguage={currentLanguage}
        />
        <Home currentLanguage={currentLanguage} />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  navdivider: {
    backgroundColor: "#164657",
  },
  welcome: {
    // color: "#293745",
    color: "#186588",
    fontWeight: 700,
    marginTop: 20,
  },
  intro: {
    color: "#293745",
    marginTop: 22,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 40,
    // textAlign: "center",
  },
  main: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },
  beginButton: {
    marginTop: 45,
    width: "35%",
    height: "13%",
    textAlign: "center",
    backgroundColor: "#186588",
  },
  beginButtonText: {
    color: "white",
    paddingTop: 10,
    margin: "auto",
    fontSize: 22,
  },
});
