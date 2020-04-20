import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f5f2f2",
  },
  videoTitle: {
    fontSize: TextSize.h2,
    marginLeft: w(5),
    fontWeight: "bold",
    marginTop: w(10),
    color: "#000",
  },
  imageThumbnail: {
    alignItems: "center",
    height: h(25),
    width: w(60),
    marginLeft: w(2),
    marginTop: w(5),
  },
  imageThumbnail2: {
    alignItems: "center",
    height: h(20),
    width: w(30),
    marginLeft: w(2),
    marginTop: w(8),
    borderRadius: 100,
  },
  itemText: {
    color: UiColor.BLACK,
    textAlign: "center",
    marginLeft: w(1),
    marginTop: w(2),
    fontWeight: "bold",
    fontSize: 13,
  },
  notificationList: {
    // marginTop: 5,
    // padding: 5,
  },
  notificationBox: {
    padding: 10,
    // marginTop: 20,
    // marginBottom: 1,
    // backgroundColor: "pink",
    flexDirection: "row",
  },
  description: {
    fontSize: 15,
    color: "#646464",
    width: w(55),
    marginLeft: 20,
  },
  likeImage: {
    height: h(20),
    width: w(25),
    borderRadius: 5,
  },
  fanBox: {
    padding: 10,
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: "white",
  },
  box: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "white",
    flexDirection: "row",
  },
  boxContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: "#151515",
  },
  description: {
    fontSize: 15,
    color: "#646464",
    width: w(55),
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 50,
    marginRight: 5,
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  socialIcon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
});
