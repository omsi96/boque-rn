import { Image, StyleSheet, View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import { Content } from "native-base";
import React from "react";

const TripDetails = ({ navigation, route }) => {
  const trip = route.params;
  return (
    <Layout style={styles.container}>
      <Content>
        <Image
          style={[{ width: "100%", height: 200 }]}
          source={{ uri: trip.image }}
        />
        <View style={[styles.contentContainer, styles.column]}>
          <Text category="h1">{trip.title}</Text>

          <Image
            style={styles.ownerImage}
            source={{ uri: trip.profile.image }}
          />
          <Text category="h5" style={styles.ownerText}>
            {trip.profile.name}
          </Text>
          <Text category="p">{trip.description}</Text>
        </View>
      </Content>
    </Layout>
  );
};

export default TripDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 12,
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    margin: 12,
  },
  tripImage: {
    flex: 1,
    resizeMode: "cover",
  },
  ownerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
    margin: 12,
  },
  title: {
    margin: 12,
  },
  ownerText: {
    marginTop: 3,
    marginBottom: 12,
  },
});
