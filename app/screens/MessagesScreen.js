import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import mosh from "../assets/mosh.jpg";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import Swipeable from "react-native-gesture-handler/Swipeable";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: ` wertwertwer wert wer /r/r/r/n/n/n//r//r//n//n
     wertwertwer wert we`,
    description: ` wertwertwer wert wer
    wert wert wert wert wert
    t wertwer twert wert wert wer`,
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => {
              console.log("onPress", item);
            }}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => {
                  setMessages([...messages.filter((x) => x.id !== item.id)]);
                  console.log("onDelete", item);
                }}
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: mosh,
            },
          ])
        }
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
