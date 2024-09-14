import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, List } from "react-native-paper";
import Swipeable from "react-native-gesture-handler/Swipeable";
import ListItemDeleteAction from "./ListItemDeleteAction";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const ListItem = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  ImageComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <List.Item
        style={{ backgroundColor: "white", paddingLeft: 10 }}
        left={() => (
          <View>
            {ImageComponent}
            {image && <Avatar.Image size={60} source={image} />}
          </View>
        )}
        right={() => (
          <View style={{ justifyContent: "center" }}>
            <MaterialCommunityIcons
              color={colors.secondary}
              size={25}
              name="chevron-right"
            />
          </View>
        )}
        title={
          <View>
            <Text numberOfLines={1} style={{ fontWeight: "500" }}>
              {title}
            </Text>
            {subTitle && (
              <Text style={{ color: "#6e6969" }} numberOfLines={2}>
                {subTitle}
              </Text>
            )}
          </View>
        }
        onPress={onPress}
      ></List.Item>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
