import React from "react";
import { Image, StyleSheet, View } from "react-native";

export const Logo = () => {
  return (
    <View style={style.logoView}>
      <Image
        style={style.logo}
        source={require("../public/images/property_vista_logo.png")}
      />
    </View>
  );
};

const style = StyleSheet.create({
  logoView: {
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
});
