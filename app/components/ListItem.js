import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, List } from "react-native-paper";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListItemDeleteAction from "./ListItemDeleteAction";

const ListItem = ({ image, title, description, onPress }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Swipeable renderRightActions={ListItemDeleteAction}>
        <List.Item
          left={() => <Avatar.Image size={60} source={image} />}
          title={
            <View>
              <Text style={{ fontWeight: "500" }}>{title}</Text>
              <Text style={{ color: "#6e6969" }}>{description}</Text>
            </View>
          }
          onPress={onPress}
        ></List.Item>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
