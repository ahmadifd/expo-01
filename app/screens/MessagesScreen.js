import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import mosh from "../assets/mosh.jpg";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import Swipeable from "react-native-gesture-handler/Swipeable";
import ListItem from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: mosh,
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: mosh,
  },
];
const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            description={item.description}
            onPress={() => {
              console.log(item);
            }}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
