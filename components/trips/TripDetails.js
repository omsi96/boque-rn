import { Image, StyleSheet, View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import { Content } from "native-base";
import MapView from "react-native-maps";
import ProfileImage from "../profile/ProfileImage";
import React from "react";

const TripDetails = ({ navigation, route }) => {
  const trip = route.params;
  const regionFrom = (lat, lon, distance) => {
    try {
      distance = distance / 2;
      const circumference = 40075;
      const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
      const angularDistance = distance / circumference;

      const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
      const longitudeDelta = Math.abs(
        Math.atan2(
          Math.sin(angularDistance) * Math.cos(lat),
          Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)
        )
      );

      return {
        latitude: lat,
        longitude: lon,
        latitudeDelta,
        longitudeDelta,
      };
    } catch (error) {
      console.log("SOME CALCULATIONS WENT WRONG");
      return {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      };
    }
  };

  return (
    <Layout style={styles.container}>
      <Content>
        <Image
          style={[{ width: "100%", height: 200 }]}
          source={{ uri: trip.image }}
        />
        <View style={[styles.contentContainer, styles.column]}>
          <Text style={styles.description} category="h1">
            {trip.title}
          </Text>
          <Text style={styles.description} category="p">
            {trip.description}
          </Text>
          <MapView
            style={styles.map}
            initialRegion={{
              ...regionFrom(trip.lat, trip.long, 20),
            }}
          />
          <View style={styles.profileInfo}>
            <ProfileImage src={trip.profile.image} />
            <Text category="h5" style={styles.ownerText}>
              {trip.profile.name}
            </Text>
          </View>
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
  profileInfo: {
    top: -65,

    alignItems: "center",
  },

  title: {
    margin: 12,
  },
  description: {
    margin: 12,
  },
  ownerText: {
    marginTop: 3,
    marginBottom: 12,
  },
  map: {
    width: "100%",
    height: 400,
    // transform: [{ scaleX: 1.1 }],
  },
});
