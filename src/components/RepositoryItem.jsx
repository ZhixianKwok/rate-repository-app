import React from "react";
import { View, StyleSheet, Text } from "react-native";

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => {
  console.log(ratingAverage, reviewCount);
  return (
    <View style={styles.item}>
      <Text>Full name:{fullName}</Text>
      <Text>Description:{description}</Text>
      <Text>Language:{language}</Text>
      <Text>Stars:{stargazersCount}</Text>
      <Text>Forks:{forksCount}</Text>
      <Text>Reviews:{reviewCount}</Text>
      <Text>Rating:{ratingAverage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default RepositoryItem;
