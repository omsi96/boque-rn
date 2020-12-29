import * as eva from "@eva-design/eva";

import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";

import { EvaIconsPack } from "@ui-kitten/eva-icons";
import HomeScreen from "./components/home/Home";
import React from "react";
import Route from "./navigation";
import SignIn from "./components/auth/SignIn";
import { StyleSheet } from "react-native";
import TripsHome from "./components/trips/TripsHome";

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Route />
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
