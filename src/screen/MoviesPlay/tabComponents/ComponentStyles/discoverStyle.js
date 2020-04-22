import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: UiColor.GRAY,
  },
  bkImage: {
    width: w(100),
    height: h(85),
  },
  socialIcon: {
    width: w(7),
    height: h(7),
  },
  statIcon1: {
    marginBottom: 15,
    width: 40,
    height: 40,
    // marginLeft: 25,
  },
  statIcon: {
    marginBottom: 15,
    width: 30,
    height: 30,
    marginTop: 4,
  },
  des: {
    fontSize: 14,
    color: "#fff",
    marginVertical: 12,
    fontWeight: "600",
    width: w(85),
  },
  ratting: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 8,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "700",
  },
  comlpex: {
    fontSize: 14,
    color: "#fff",
    marginVertical: 10,
    fontWeight: "600",
    width: w(85),
  },
  actions: {
    fontSize: 14,
    color: "#fff",
    marginVertical: 10,
    fontWeight: "bold",
  },
});
