import { Image, StyleSheet } from "react-native";

import React from "react";

const ProfileImage = ({ src }) => {
  console.log("profile Image", src);
  return <Image style={styles.image} source={{ uri: src }} />;
};

export default ProfileImage;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
    margin: 12,
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 4,
    shadowRadius: 60,
  },
});
