import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "../components/Text";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>100$</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Ubaid Rana"
            subTitle=" 5 Listing"
            image={require("../assets/ubaid.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
