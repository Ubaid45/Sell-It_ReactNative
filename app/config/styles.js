import colors from "./colors";
import { Platform } from "react-native";
export default {
  colors,
  text: {
    fontSize: 18,
    color: colors.dark,
    width: "100%",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
