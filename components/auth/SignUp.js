import { Button, Layout, Text } from "@ui-kitten/components";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import React, { useState } from "react";

import { Input } from "@ui-kitten/components";
import { InputAccessoriesShowcase } from "../controls/fields";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import authStore from "../../stores/AuthStore";

const SignUp = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    name: "",
  });
  const handleSubmit = async () => {
    try {
      await authStore.signUp(user);
      console.log("Signed in scucessfully!");
      navigation.navigate("");
    } catch (error) {
      alert(`couldn't sign up! ${error.message}`);
    }
  };
  return (
    <Layout style={styles.container}>
      <KeyboardAwareScrollView>
        <Text style={styles.text} category="h1">
          Sign up
        </Text>
        <Input
          style={styles.field}
          placeholder="email"
          value={user.username}
          label="email"
          onChangeText={(username) => setUser({ ...user, username })}
        />
        <Input
          style={styles.field}
          placeholder="fullName"
          value={user.name}
          label="fullName"
          onChangeText={(name) => setUser({ ...user, name })}
        />
        <InputAccessoriesShowcase
          style={styles.field}
          placeholder="password"
          value={user.password}
          onChangeText={(password) => setUser({ ...user, password })}
        />
        <Button status="success" style={styles.button} onPress={handleSubmit}>
          Create Account
        </Button>
      </KeyboardAwareScrollView>
    </Layout>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  text: {
    margin: 40,
    textAlign: "center",
  },
  button: {
    margin: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  field: {
    flex: 1,
    width: 350,
    marginHorizontal: 10,
  },
});
