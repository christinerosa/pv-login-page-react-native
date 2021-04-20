import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input } from "@ui-kitten/components";
import { PasswordInput } from "./PasswordInput";
import { EmailInput } from "./EmailInput";

export const LoginCredentials = () => {
  return (
    <View style={style.credentialsView}>
      <Text category="label" style={style.credentials}>
        EMAIL
      </Text>
      <EmailInput />
      <Text category="label" style={style.credentials}>
        PASSWORD
      </Text>
      <PasswordInput />
      <TouchableOpacity style={style.forgotPassword}>
        <Text style={{ color: "#2DACB8", fontSize: 12 }}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  credentialsView: {
    flex: 1,
  },
  credentials: {
    fontSize: 12,
    marginLeft: 40,
    paddingBottom: 10,
  },
  forgotPassword: {
    alignItems: "center",
    marginTop: 10,
  },
});
