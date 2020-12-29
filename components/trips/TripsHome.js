import * as eva from "@eva-design/eva";

import { Layout } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import TripsList from "./TripsList";
import { observer } from "mobx-react";
import tripsStore from "../../stores/TripsStore";

const TripsHome = ({ navigation }) => {
  return (
    <Layout style={styles.container}>
      <TripsList trips={tripsStore.trips} navigation={navigation} />
    </Layout>
  );
};

export default observer(TripsHome);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
