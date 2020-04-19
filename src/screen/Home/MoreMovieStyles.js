import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: UiColor.GRAY,
  },
  movieText: {
    fontSize: TextSize.bigSize,
    fontWeight: "bold",
    margin: 10,
  },
  dropdownContainer: {
    flexDirection: "row",
    backgroundColor: UiColor.PINK,
    height: h(7),

    justifyContent: "space-around",
    alignItems: "center",
  },
  genre: {
    fontSize: TextSize.bigSize,
    fontWeight: "400",
    color: TextColor.WHITE,
  },

  likeImage: {
    height: h(20),
    width: w(25),
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#dcdcdc",
    padding: 10,
  },

  nameTxt: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#222",
    fontSize: 15,
  },
  icon: {
    height: 28,
    width: 28,
  },
  headerText: {
    fontSize: 15,
    margin: 10,
    fontWeight: "bold",
  },
  menuContent: {
    color: "#000",
    fontWeight: "500",
    padding: 2,
    fontSize: 15,
  },
});
