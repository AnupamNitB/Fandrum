import { StyleSheet } from "react-native";
import { w, h, totalSize } from "../../../../utils/Dimensions";
import { UiColor, TextColor, TextSize } from "../../../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    marginLeft: 10,
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
});
