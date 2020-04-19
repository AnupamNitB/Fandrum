import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  tabBarTextStyle: {
    fontSize: 14,
    fontWeight: "400",
  },
  underlineStyle: {
    backgroundColor: "#E10264",
    // marginBottom: 12,
  },
});
