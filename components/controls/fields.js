import { Icon, Input } from "@ui-kitten/components";

import React from "react";
import { TouchableWithoutFeedback } from "react-native";

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

export const InputAccessoriesShowcase = (props) => {
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
      value={value}
      label="Password"
      placeholder="Place your Text"
      caption="Should contain at least 8 symbols"
      accessoryRight={renderIcon}
      captionIcon={AlertIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={(nextValue) => setValue(nextValue)}
      {...props}
    />
  );
};
