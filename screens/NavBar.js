import { StyleSheet, View } from "react-native";
import { Appbar, Divider, Menu, Text } from "react-native-paper";
// import { useTranslation } from "react-i18next";
// import SelectDropdown from "react-native-select-dropdown";
// import { useState } from "react";
import i18next, { languageResources } from "../services/i18next";
import languagesList from "../services/languageList.json";
import { useNavigation } from "@react-navigation/native";

export default function NavBar({
  showLanguageMenu,
  setShowLanguageMenu,
  setCurrentLanguage,
}) {
  const navigation = useNavigation();

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    setCurrentLanguage(lng);
    setShowLanguageMenu(false);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header type="medium" theme={{ colors: "green" }}>
        <Menu
          visible={showLanguageMenu}
          onDismiss={() => setShowLanguageMenu(false)}
          anchor={
            <Appbar.Action
              icon="translate"
              onPress={() => setShowLanguageMenu(true)}
              style={styles.navicon}
              color="#f7f5e5"
            />
          }
        >
          {Object.keys(languageResources).map((lang) => {
            return (
              <Menu.Item
                key={lang}
                title={languagesList[lang].nativeName}
                onPress={() => changeLanguage(lang)}
              />
            );
          })}
        </Menu>
        <Appbar.Content
          title="MOMO"
          titleStyle={{
            alignSelf: "center",
            color: "#D9BB70",
            fontWeight: "700",
            paddingTop: 10,
            fontSize: 35,
            letterSpacing: 3,
          }}
          onPress={() => navigation.navigate("Home")}
        />
        <Appbar.Action icon="arrow-down-drop-circle-outline" color="#f7f5e5" />
      </Appbar.Header>
      <Divider bold={true} style={styles.navdivider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#011e20",
    opacity: 1,
    width: "100%",
  },
  navdivider: {
    backgroundColor: "#01132",
    opacity: 1,
    height: 3,
  },
});
