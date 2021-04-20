import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "@ui-kitten/components";
import { Logo } from "../components/Logo";
import { LoginCredentials } from "../components/LoginCredentials";
import { SignInButtons } from "../components/SignInButtons";

export const LoginScreen = () => {
  return (
    <View style={style.loginView}>
      <Logo />
      <LoginCredentials />
      <SignInButtons />
      <TouchableOpacity style={style.help}>
        <Text style={{ color: "#2DACB8", fontSize: 12 }}>Help & Support</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  loginView: {
    flex: 1,
  },
  help: {
    flex: 1,
    alignItems: "center",
  },
});
