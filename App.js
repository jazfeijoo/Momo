// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Appbar, PaperProvider, Divider, Text } from "react-native-paper";

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
            <Text variant="headlineMedium" style={styles.welcome}>
              Welcome
            </Text>
            <Text variant="titleLarge" style={styles.intro}>
              To update language preference or learn about the app and how to
              get started, click on the right side help icon.
            </Text>
            <Text variant="titleLarge" style={styles.intro}>
              To get started on your "me" session, you can go ahead and click on
              the button below.
            </Text>
          </View>
        </LinearGradient>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //     background: rgb(236,192,141),
    // background: linear-gradient(90deg, rgba(236,192,141,0.6741071428571428) 0%, rgba(182,217,209,0.5088410364145659) 48%, rgba(236,192,141,1) 100%),
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
    color: "#293745",
  },
  intro: {
    color: "#293745",
    marginTop: 22,
    marginLeft: 7,
    marginRight: 7,

    // textAlign: "center",
  },
  main: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
