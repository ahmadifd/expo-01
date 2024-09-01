import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { Card as CardComponent } from "react-native-paper";

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={{paddingHorizontal:10}}>
      <CardComponent>
        <CardComponent.Cover source={image} />
        <CardComponent.Title
          subtitleStyle={{ color: colors.secondary }}
          title={title}
          subtitle={subTitle}
        ></CardComponent.Title>
      </CardComponent>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
