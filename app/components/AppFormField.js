import { StyleSheet, Text, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import React from "react";
import { useFormikContext } from "formik";

const AppFormField = ({ name, ...otherProps }) => {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
  return (
    <>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      {touched[name] && errors[name] && (
        <HelperText type="error">{errors[name]}</HelperText>
      )}
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
