import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../theme";

export const styles = StyleSheet.create({
  headerView: {
    height: h(10),
    // height: 56,
    width: w(100),
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: UiColor.WHITE,
  },

  header_title: {
    fontSize: TextSize.h1,
    marginLeft: 10,
    alignSelf: "center",
    // fontFamily: "Roboto",
    fontWeight: "500",
    color: TextColor.WHITE,
  },
  header_title_icon: {
    height: 45,
    alignSelf: "center",
  },
  icon_menu: {
    // tintColor: UiColor.WHITE,
    width: w(25),
    height: w(25),
    // alignSelf: 'center',
    marginLeft: w(3),
  },
  right_items: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  icon_list_type: {
    width: w(6),
    height: w(6),
    alignSelf: "center",
    marginRight: w(3),
    tintColor: UiColor.GRAY,
  },
});
