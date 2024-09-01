import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import logored from "../assets/logo-red.png";
import { HelperText, TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import colors from "../config/colors";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen>
      <View style={{ marginHorizontal: 10 }}>
        <Image
          style={{
            width: 80,
            height: 80,
            alignSelf: "center",
            marginTop: 50,
            marginBottom: 20,
          }}
          source={logored}
        />

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <TextInput
                mode="outlined"
                onChangeText={handleChange("email")}
                label="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCorrect={false}
                right={<TextInput.Icon icon="email" />}
                error={errors.email}
              />
              {errors.email && (
                <HelperText type="error" visible={errors.email}>
                  {errors.email}
                </HelperText>
              )}
              <TextInput
                mode="outlined"
                onChangeText={handleChange("password")}
                label="Password"
                autoCapitalize="none"
                secureTextEntry
                textContentType="password"
                autoCorrect={false}
                right={<TextInput.Icon icon="lock" />}
                error={errors.password}
              />
              {errors.password && (
                <HelperText type="error" visible={errors.password}>
                  {errors.password}
                </HelperText>
              )}
              <Button
                buttonColor={colors.primary}
                style={{ marginTop: 15 }}
                mode="contained"
                onPress={handleSubmit}
              >
                Login
              </Button>
            </>
          )}
        </Formik>
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
