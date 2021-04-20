import React from "react";
import { Button, Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { SocialIcon } from "./SocialIcon";

export const SignInButtons = () => {
  return (
    <View style={style.signInView}>
      <Button style={style.signinButton} size="medium">
        SIGN IN
      </Button>
      <View style={style.divider}>
        <Text style={{ color: "lightgrey", paddingRight: 5 }}> ─────── </Text>
        <Text
          category="label"
          style={{ fontSize: 12, paddingRight: 10, paddingLeft: 10 }}
        >
          OR SIGN IN WITH
        </Text>
        <Text style={{ color: "lightgrey", paddingLeft: 5 }}> ─────── </Text>
      </View>
      <SocialIcon />
    </View>
  );
};

const style = StyleSheet.create({
  signInView: {
    flex: 1,
  },
  signinButton: {
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 50,
    marginTop: 70,
    backgroundColor: "#072953",
    borderColor: "#072953",
  },
  divider: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
