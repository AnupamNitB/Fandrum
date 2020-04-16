import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  videoTitle: {
    fontSize: TextSize.h2,
    marginLeft: w(5),
    fontWeight: "bold",
    marginTop: w(4),
    color: "#000",
  },
  imageThumbnail: {
    alignItems: "center",
    height: h(25),
    width: w(60),
    marginLeft: w(2),
    marginTop: w(2),
  },
  imageThumbnail2: {
    alignItems: "center",
    height: h(18),
    width: w(45),
    marginLeft: w(2),
    marginTop: w(2),
  },
  itemText: {
    color: UiColor.BLACK,
    textAlign: "center",
    marginLeft: w(1),
    marginTop: w(2),
    fontWeight: "bold",
    fontSize: 13,
  },
});
