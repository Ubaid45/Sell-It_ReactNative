import colors from "./colors";
import { Platform } from "react-native";
export default {
  colors,
  text: {
    fontSize: 18,
    color: colors.dark,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
