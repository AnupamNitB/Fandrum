import { StyleSheet } from "react-native";
import { w, h, totalSize, height } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bannerImg: {
    width: w(100),
    height: h(35),
    backgroundColor: "#f0faf9",
  },

  box: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#f0faf9",
    flexDirection: "row",
  },
  imageContent: {
    height: h(30),
    width: w(32),
    borderRadius: 5,
    marginTop: -40,
  },
  boxContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  button: {
    height: w(8),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 5,
    marginTop: 5,
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    height: w(4),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 5,
    marginVertical: 34,
    marginTop: 5,
  },
  btnContainer: {
    fontWeight: "800",
    borderWidth: 1,
    padding: 5,
    marginLeft: 5,
    color: TextColor.GRAY,
    borderColor: UiColor.GRAY,
  },
  title: {
    fontSize: 18,
    color: "#646464",
    width: w(45),
    fontWeight: "bold",
    marginLeft: 5,
  },
  description: {
    fontSize: 15,
    color: "#646464",
    marginLeft: 5,
  },
  socialIcon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  commentIcon: {
    width: 18,
    height: 18,
    marginTop: 10,
    marginLeft: 5,
  },
  comment: {
    marginTop: 10,
    fontSize: 12,
    color: "#646464",
    marginLeft: 5,
  },
  netflixImgs: {
    marginLeft: 12,
  },
  fanBox: {
    marginLeft: 20,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#FFFFFF",
  },
  imageThumbnail: {
    // alignItems: "center",
    height: h(25),
    width: w(35),
    // marginLeft: w(2),
    // marginTop: w(5),
  },
  itemText: {
    color: UiColor.BLACK,
    textAlign: "center",
    marginLeft: w(1),
    marginTop: w(2),
    fontWeight: "bold",
    fontSize: 13,
  },
  interestingText: {
    fontSize: 14,
    color: "#646464",
    width: w(85),
    fontWeight: "bold",
    marginLeft: 5,
  },
  subTitle: {
    fontSize: 12,
    color: "#646464",
    width: w(45),
    fontWeight: "bold",
    marginLeft: 5,
  },
  des: {
    fontSize: 14,
    color: "#646464",
    width: w(95),
    fontWeight: "bold",
    marginLeft: 20,
  },
});
