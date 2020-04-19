import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: UiColor.GRAY,
  },
  bkImage: {
    width: w(100),
    height: h(90),
  },
  socialIcon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
});
