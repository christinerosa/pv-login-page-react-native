import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "@ui-kitten/components";

export const EmailInput = () => {
  const [value, setValue] = React.useState("");

  return (
    <Input
      style={style.input}
      placeholder="Email"
      value={value}
      onChangeText={(nextValue) => setValue(nextValue)}
      size="medium"
    />
  );
};

const style = StyleSheet.create({
  input: {
    borderRadius: 12,
    paddingBottom: 15,
    marginRight: 30,
    marginLeft: 30,
  },
});
