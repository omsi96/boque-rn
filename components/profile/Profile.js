import { Layout, Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

import ProfileImage from "./ProfileImage";
import React from "react";
import TripsList from "../trips/TripsList";
import { observer } from "mobx-react";
import profileStore from "../../stores/ProfileStore";
import tripsStore from "../../stores/TripsStore";

const Profile = ({ navigation, route, profileId }) => {
  const { user } = route.params;
  console.log("User: ", user);
  let profile;
  if (route.profile?.id) {
    profile = user.profile;
  } else if (profileId) {
    profile = profileStore.getProfile(profileId);
  } else {
    alert("Couldn't find profile!");
    <Layout>
      <Text>Couldn't find profile</Text>
    </Layout>;
  }

  const defaultAvatar =
    "https://www.meme-arsenal.com/memes/335bf12b9769dbcefc4de998cd023aae.jpg";
  return (
    <Layout style={styles.container}>
      <Text category="h3">Hello</Text>
      <ProfileImage src={profile?.image ?? defaultAvatar} />
      <Text category="h3">Omar Alibrahim</Text>
      <TripsList trips={profile.trips ?? []} />
    </Layout>
  );
};

export default observer(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
