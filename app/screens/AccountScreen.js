import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import mosh from "../assets/mosh.jpg";
import colors from "../config/colors";
import { Avatar } from "react-native-paper";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen>
      <View
        style={{
          paddingHorizontal: 10,
          backgroundColor: "white",
          marginBottom: 40,
          marginTop: 20,
        }}
      >
        <ListItem
          title="Farshid Ahmadi"
          subTitle="ahmadi.fd@gmail.com"
          image={mosh}
        />
      </View>
      <View style={{ paddingHorizontal: 10, backgroundColor: "white" }}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Avatar.Icon
                  size={40}
                  icon={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          backgroundColor: "white",
          marginTop: 20,
        }}
      >
        <ListItem
          title="Log Out"
          ImageComponent={
            <Avatar.Icon icon="logout" size={40} backgroundColor="#ffe66d" />
          }
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
