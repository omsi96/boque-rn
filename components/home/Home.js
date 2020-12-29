import * as eva from "@eva-design/eva";

import { Button, IconRegistry, Layout, Text } from "@ui-kitten/components";

import React from "react";
import { StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <Layout style={styles.container}>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("SignIn")}
      >
        Sign in
      </Button>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Trips")}
      >
        Trips
      </Button>

      {/* <Button onPress={navigation.navigate("SignIn")}> Sign in </Button> */}
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 10,
  },
});
