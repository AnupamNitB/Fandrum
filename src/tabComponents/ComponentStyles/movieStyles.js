import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: UiColor.GRAY,
    // color: "pink",
  },
  fullImg: {
    width: w(48),
    height: h(40),
    margin: 8,
  },
  halfImgFirst: {
    width: w(20),
    height: h(18.5),
    margin: 8,
  },
  icon: {
    position: "absolute",
    top: 9,
    left: 22,
    width: w(6),
    height: h(6),
  },
  addIcon: {
    position: "absolute",
    top: 45,
    left: 35,

    width: w(6),
    height: h(6),
  },
});
