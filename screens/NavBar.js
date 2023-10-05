import { StyleSheet, View } from "react-native";
import { Appbar, Divider, Menu, Text } from "react-native-paper";
// import { useTranslation } from "react-i18next";
// import SelectDropdown from "react-native-select-dropdown";
// import { useState } from "react";
import i18next, { languageResources } from "../services/i18next";
import languagesList from "../services/languageList.json";

export default function NavBar({
  showLanguageMenu,
  setShowLanguageMenu,
  setCurrentLanguage,
}) {
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
          title="momo"
          titleStyle={{
            alignSelf: "center",
            color: "#186588",
            fontWeight: "700",
            paddingTop: 10,
            fontSize: 35,
          }}
        />
        <Appbar.Action icon="arrow-down-drop-circle-outline" />
      </Appbar.Header>
      <Divider bold={true} style={styles.navdivider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c2b6a6",
    width: "100%",
  },
  navdivider: {
    backgroundColor: "#164657",
    height: 3,
  },
});
