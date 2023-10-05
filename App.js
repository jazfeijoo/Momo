// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Appbar,
  PaperProvider,
  Divider,
  Text,
  Button,
} from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
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
          <Appbar.Header type="medium" theme={{ colors: "green" }}>
            <Appbar.Action icon="arrow-down-drop-circle-outline" />
            <Appbar.Content
              title="momo"
              titleStyle={{
                alignSelf: "center",
                color: "#186588",
                fontWeight: "700",
              }}
            />
            <Appbar.Action icon="help-circle-outline" />
          </Appbar.Header>
          <Divider bold={true} style={styles.navdivider} />

          <View style={styles.main}>
            <Text variant="headlineLarge" style={styles.welcome}>
              Welcome
            </Text>
            <Text variant="titleLarge" style={styles.intro}>
              To update language preference or learn about the app, click on the
              top right help icon.
            </Text>
            <Text variant="titleLarge" style={styles.intro}>
              To begin your session, you can go ahead and click on the button
              below.
            </Text>
            <Button
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={styles.beginButton}
              labelStyle={styles.beginButtonText}
              compact={true}
            >
              Begin
            </Button>
          </View>
        </LinearGradient>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  navdivider: {
    backgroundColor: "#164657",
    // hairLineWidth: "1",
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
