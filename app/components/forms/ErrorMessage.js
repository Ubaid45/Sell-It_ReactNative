import React from "react";
import { StyleSheet } from "react-native";

import Text from "../Text";

const ErrorMessage = ({ error, visible }) => {
  if (!(visible && error)) return null;

  return <Text style={styles.error}>{error}</Text>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
