import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItemDeleteAction = () => {
  return (
    <View style={{ backgroundColor: "#ff5252", width: 70 , justifyContent:"center" , alignItems:"center" }}>
      <MaterialCommunityIcons name="trash-can" size={35} />
    </View>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({});
