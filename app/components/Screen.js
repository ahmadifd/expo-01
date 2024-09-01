import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";

const Screen = ({ children }) => {
  return (
    <PaperProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView
          style={{
            paddingTop: Constants.statusBarHeight,
            backgroundColor: "lightgrey",
            flex: 1,
         
          }}
        >
          {children}
        </SafeAreaView>
      </GestureHandlerRootView>
    </PaperProvider>
  );
};

export default Screen;

const styles = StyleSheet.create({});
