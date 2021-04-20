import React from "react";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import { Icon, Input } from "@ui-kitten/components";

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

export const PasswordInput = () => {
  const [value, setValue] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  return (
    <Input
      style={style.input}
      value={value}
      placeholder="Password"
      accessoryRight={renderIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={(nextValue) => setValue(nextValue)}
      size="medium"
    />
  );
};

const style = StyleSheet.create({
  input: {
    borderRadius: 12,
    paddingBottom: 0,
    marginRight: 30,
    marginLeft: 30,
  },
});
