import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { Audio } from "expo-av";

export default function AudioPlayer({ musicFrequency }) {
  const [sound, setSound] = useState(undefined);
  const [isPlaying, setIsPlaying] = useState(false);

  async function playSound() {
    console.log("Loading Sound");
    const audioSelected =
      musicFrequency === "0-3"
        ? "0-3_3HZ_1.mp3"
        : musicFrequency === "4-13"
        ? "4-13_6HZ_1.mp3"
        : "14-30_14HZ_1.mp3";

    const { sound } =
      musicFrequency === "0-3"
        ? await Audio.Sound.createAsync(require(`../assets/0-3_3HZ_1.mp3`))
        : musicFrequency === "4-13"
        ? await Audio.Sound.createAsync(require(`../assets/4-13_6HZ_1.mp3`))
        : await Audio.Sound.createAsync(require(`../assets/14-30_14HZ_1.mp3`));

    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
    setIsPlaying(true);
  }

  async function stopSound() {
    await sound.unloadAsync();
    setIsPlaying(false);
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
      <IconButton
        onPress={!isPlaying ? playSound : stopSound}
        style={styles.audioButton}
        labelStyle={styles.audioButtonText}
        icon={!isPlaying ? "play-circle" : "pause-circle"}
        size={60}
        iconColor="#FFFFFF"
      />
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
  audioButton: {
    marginTop: 40,
    backgroundColor: "#8E9D8F",
    borderWidth: 3,
    borderRadius: 90,
    borderColor: "#FFFFFF",
  },
});
