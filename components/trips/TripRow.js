import { Image, StyleSheet, View } from "react-native";

import React from "react";
import { Text } from "@ui-kitten/components";

const TripRow = ({ trip }) => {
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

export default TripRow;

const styles = StyleSheet.create({
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
