import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";

import AppButton from "../Button";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;

const styles = StyleSheet.create({});
