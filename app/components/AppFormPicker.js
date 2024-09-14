import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import { HelperText, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

const AppFormPicker = ({ name, categories, ...otherProps }) => {
  const { setFieldValue, setFieldTouched, touched, errors, values } =
    useFormikContext();
  return (
    <>
      <View
        style={{
          borderColor: "grey",
          marginTop: 7,
          backgroundColor: "white",
          borderWidth: 1,
          borderRadius: 3,
          width: "50%",
        }}
      >
        <Picker
          mode="dialog"
          placeholder="Category"
          selectedValue={values["category"]}
          onValueChange={(itemValue, itemIndex) => {
            setFieldValue("category", itemValue);
          }}
          onBlur={() => {
            setFieldTouched(name);
            console.log(values["category"]);
          }}
          {...otherProps}
        >
          {categories.map((item) => (
            <Picker.Item
              key={item?.value}
              label={item?.label}
              value={item?.value}
            >
              <Text>qwer qwer qwer</Text>
            </Picker.Item>
          ))}
        </Picker>
      </View>
      {touched[name] &&
        (values["category"] === 0 || values["category"] === null) && (
          <HelperText type="error">Please Select</HelperText>
        )}
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});

{
}
