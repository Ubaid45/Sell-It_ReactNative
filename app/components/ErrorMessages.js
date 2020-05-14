import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";

const ErrorMessages = ({ error }) => {
  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessages;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
