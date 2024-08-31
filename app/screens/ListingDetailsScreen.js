import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import jacket from "../assets/jacket.jpg";
import mosh from "../assets/mosh.jpg";
import colors from "../config/colors";
import { Avatar, List, HelperText } from "react-native-paper";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={jacket} />
      <View style={styles.detailesContainer}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.subtitle}>$100</Text>
        <View style={{ marginVertical: 40 }}>
          <List.Section>
            <List.Item
              title={
                <View>
                  <Text style={{ fontWeight: "500" }}>Mosh Hamedany</Text>
                  <Text style={{ color: "#6e6969" }}>5 Listings</Text>
                </View>
              }
              left={() => <Avatar.Image size={60} source={mosh} />}
            ></List.Item>
          </List.Section>
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailesContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
