import { StyleSheet } from "react-native";
import { w, h, totalSize, height } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bannerImg: {
    width: w(90),
    height: h(40),
    marginHorizontal: 18,
    borderRadius: 10,
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
