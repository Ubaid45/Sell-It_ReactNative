import React from "react";

import TextInput from "./TextInput";
import { TouchableOpacity, StyleSheet } from "react-native";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <TextInput style={styles.text}>{item.label}</TextInput>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 5,
  },
});

export default PickerItem;
