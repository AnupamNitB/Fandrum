import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: UiColor.GRAY,
  },
  bkImage: {
    width: w(100),
    height: h(85),
  },
  socialIcon: {
    width: 35,
    height: 35,
    marginBottom: 10,
  },
  fantasyText: {
    fontSize: 14,
    fontWeight: "800",
    marginLeft: 10,
  },
  buttons: {
    flexDirection: "row",
    marginVertical: 20,
  },
  button: {
    height: w(4),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 5,
    // marginVertical: 34,
    // marginTop: 25,
  },
  btnContainer: {
    fontWeight: "800",
    borderWidth: 1,
    padding: 5,
    marginLeft: 5,
    // color: TextColor.GRAY,
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
    top: 0,
    left: 15,
    width: w(6),
    height: h(6),
  },
});
