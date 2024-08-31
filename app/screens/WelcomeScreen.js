import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";
import background from "../assets/background.jpg";
import logo from "../assets/logo-red.png";
import { Button } from "react-native-paper";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={background}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.ButtonsContainer}>
        <Button style={styles.loginButton}>Login</Button>
        <Button style={styles.registerButton}>Register</Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "blue",
    marginVertical: 10,
  },
  registerButton: {
    width: "100%",
    backgroundColor: "red",
    marginVertical: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  ButtonsContainer: {
    width: "100%",
    padding: 20,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
