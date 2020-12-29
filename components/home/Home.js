import * as eva from "@eva-design/eva";

import { Button, IconRegistry, Layout, Text } from "@ui-kitten/components";

import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { StyleSheet } from "react-native";
import jwtDecode from "jwt-decode";

const getUser = async () => {
  try {
    const token = await AsyncStorage.getItem("myToken");
    const user = jwtDecode(token);
    console.log("**USER, ", user);
    return user;
  } catch (error) {
    return null;
  }
};

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
      <Button
        style={styles.button}
        onPress={async () =>
          navigation.navigate("Profile", { user: await getUser() })
        }
      >
        Profile Page
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
