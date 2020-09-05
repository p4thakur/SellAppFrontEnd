import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

//ovverite some property of default
export default {
  ...DefaultTheme, //copy all the thems
  colors: {
    ...DefaultTheme.colors, //copy all colors
    primary: colors.dark,
    background: colors.white,
  },
};
