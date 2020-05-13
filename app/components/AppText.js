import React from "react";
import { StyleSheet, Text, View } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.Text, style]}>{children}</Text>;
}

export default AppText;

const styles = StyleSheet.create({
  Text: {
    fontSize: 18,
  },
});
