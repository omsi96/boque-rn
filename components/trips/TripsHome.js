import * as eva from "@eva-design/eva";

import { Button, Card, Layout, Text } from "@ui-kitten/components";
import { Content, List, View } from "native-base";
import { Image, SafeAreaView, StyleSheet } from "react-native";

import React from "react";
import { observer } from "mobx-react";
import tripsStore from "../../stores/TripsStore";

const Row = ({ trip }) => {
  return (
    <View style={styles.row}>
      <Image style={styles.tripImage} source={{ uri: trip.image }} />
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text category="h4">{trip.title}</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Image
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              marginRight: 10,
            }}
            source={{ uri: trip.profile.image }}
          />
          <Text style={{ fontSize: 17 }}>{trip.profile.name}</Text>
        </View>
      </View>
    </View>
  );
};

const TripsHome = () => {
  return (
    <Layout style={styles.container}>
      <Content>
        <List>
          {tripsStore.trips.map((trip) => (
            <Row trip={trip} />
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
  row: {
    flex: 1,
    flexDirection: "row",
    margin: 12,
  },
  tripImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginHorizontal: 12,
  },
});
