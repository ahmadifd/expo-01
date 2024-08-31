import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import chair from "../assets/chair.jpg";
import colors from "../config/colors";
import { Button, IconButton } from "react-native-paper";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <IconButton
        icon="close"
        iconColor="white"
        style={[styles.closeIcon, {}]}
        size={30}
        onPress={() => console.log("Pressed")}
      />

      <IconButton
        icon="trash-can-outline"
        iconColor="white"
        style={[styles.deleteIcon, {}]}
        size={35}
        onPress={() => console.log("Pressed")}
      />

      <Image resizeMode="contain" style={styles.image} source={chair} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
