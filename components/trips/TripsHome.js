import * as eva from "@eva-design/eva";

import { Button, Card, Layout, Text } from "@ui-kitten/components";
import { Content, List, ListItem, View } from "native-base";
import { Image, SafeAreaView, StyleSheet } from "react-native";

import React from "react";
import TripRow from "./TripRow";
import { observer } from "mobx-react";
import tripsStore from "../../stores/TripsStore";

const TripsHome = ({ navigation }) => {
  return (
    <Layout style={styles.container}>
      <Content>
        <List>
          {tripsStore.trips.map((trip) => (
            <ListItem onPress={() => navigation.navigate("TripDetails", trip)}>
              <TripRow trip={trip} />
            </ListItem>
          ))}
        </List>
      </Content>
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
