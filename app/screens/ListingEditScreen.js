import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { Formik } from "formik";
import AppFormField from "../components/AppFormField";
import { Button, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import colors from "../config/colors";
import AppFormPicker from "../components/AppFormPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().required().min(1).label("Description"),
  category: Yup.object().required().nullable(1).label("Category"),
});

const categories = [
  {
    label: "Category",
    value: 0,
  },
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothings",
    value: 2,
  },
  {
    label: "Camera",
    value: 3,
  },
];

const ListingEditScreen = () => {
  return (
    <Screen>
      <View style={{ marginHorizontal: 10 }}>
        <Formik
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, setFieldValue, values }) => (
            <>
              <AppFormField
                style={{ width: "50%" }}
                maxLength={255}
                name="title"
                mode="outlined"
                label="Title"
                autoCorrect={false}
              />
              <AppFormField
                keyboardType="numeric"
                maxLength={8}
                name="price"
                mode="outlined"
                label="Price"
                autoCorrect={false}
              />
              <AppFormPicker
              
                categories={categories}
                mode="dialog"
                placeholder="Category"
              ></AppFormPicker>
              <AppFormField
                maxLength={255}
                multiLine
                name="description"
                mode="outlined"
                label="Description"
                autoCorrect={false}
              />
              <Button
                buttonColor={colors.secondary}
                style={{ marginTop: 15 }}
                mode="contained"
                onPress={handleSubmit}
              >
                Post
              </Button>
            </>
          )}
        </Formik>
      </View>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({});
