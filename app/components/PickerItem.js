import React from "react";

import AppTextInput from "./AppTextInput";
import { TouchableOpacity, StyleSheet } from "react-native";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppTextInput style={styles.text}>{item.label}</AppTextInput>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 5,
  },
});

export default PickerItem;
