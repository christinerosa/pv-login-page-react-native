import React from "react";
import { FontAwesome, EvilIcons, Zocial } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Button } from "@ui-kitten/components";

export const SocialIcon = () => {
  return (
    <View style={style.iconContainer}>
      <View style={style.iconButton}>
        <EvilIcons name="sc-facebook" size={30} color={"white"} />
      </View>
      <View style={style.iconButton}>
        <FontAwesome name="google" size={25} color={"white"} />
      </View>
      <View style={style.iconButton}>
        <FontAwesome name="instagram" size={25} color={"white"} />
      </View>
      <View style={style.iconButton}>
        <FontAwesome name="linkedin" size={25} color={"white"} />
      </View>
      <View style={style.iconButton}>
        <FontAwesome name="windows" size={20} color={"white"} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  iconButton: {
    backgroundColor: "grey",
    borderColor: "grey",
    margin: 10,
    marginTop: 0,
    marginBottom: 10,
    height: 55,
    width: 55,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
