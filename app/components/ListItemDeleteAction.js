import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconButton } from "react-native-paper";

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <View
      style={{
        width: 70,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton icon="trash-can" size={30} onPress={onPress} />
    </View>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({});
