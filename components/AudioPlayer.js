import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Audio } from "expo-av";

export default function AudioPlayer() {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/freq_3.2_hz.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <>
      <Button onPress={playSound}>AUDIO BUTTON</Button>
    </>
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
  titleText: {
    color: "#FFFFFF",
    fontWeight: 700,
    marginTop: 50,
  },
});
