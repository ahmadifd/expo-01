import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import jacket from "../assets/jacket.jpg";
import couch from "../assets/couch.jpg";
import Card from "../components/Card";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: jacket,
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 200,
    image: couch,
  },
];
const ListingsScreen = () => {
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={<View style={{ marginBottom: 15 }}></View>}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({});
