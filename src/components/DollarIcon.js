import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import settingImage from "../assets/icons/ic_dollar.png";
export default (DollarIcon = (props) => {
  //   let textColor = props.focused ? "#333333" : "#999999";
  //   const settingImageFocused = require("../assets/icons/ic_like.png");
  //   const settingImageUnfocused = require("../assets/icons/ic_ball.png");
  //   let settingImage = props.focused
  //     ? settingImageFocused
  //     : settingImageUnfocused;
  //   let borderColor = props.focused ? "#333333" : "#FFFFFF";
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Image
        source={settingImage}
        style={{
          //   backgroundColor: "#fd005c",
          borderRadius: 50,
          height: 70,
          width: 70,
          borderColor: "#f1f1f1",
          borderWidth: 6,
          marginBottom: 45,
        }}
      />
    </View>
  );
});
