import { Button, Layout, Text } from "@ui-kitten/components";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import React, { useState } from "react";

import { Input } from "@ui-kitten/components";
import { InputAccessoriesShowcase } from "../controls/fields";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import authStore from "../../stores/AuthStore";

const SignIn = ({ navigation }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async () => {
    await authStore.signIn(credentials);
    if (authStore.user) {
    } else {
      console.log("COULDN'T SIGN IN!");
      alert("couldn't sign in!");
    }
  };
  return (
    <Layout style={styles.container}>
      <KeyboardAwareScrollView>
        <Text style={styles.text} category="h1">
          Sign in
        </Text>
        <Input
          style={styles.field}
          placeholder="email"
          value={credentials.username}
          label="email"
          onChangeText={(username) =>
            setCredentials({ ...credentials, username })
          }
        />
        <InputAccessoriesShowcase
          style={styles.field}
          placeholder="password"
          value={credentials.password}
          onChangeText={(password) =>
            setCredentials({ ...credentials, password })
          }
        />
        <Button status="success" style={styles.button} onPress={handleSubmit}>
          Sign in
        </Button>
        <Button
          style={{ ...styles.button }}
          appearance="ghost"
          onPress={() => navigation.navigate("SignUp")}
        >
          Don't have account? register now!
        </Button>
      </KeyboardAwareScrollView>
    </Layout>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  text: {
    margin: 40,
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
