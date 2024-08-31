import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";

const Screen = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Constants.statusBarHeight,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({});
