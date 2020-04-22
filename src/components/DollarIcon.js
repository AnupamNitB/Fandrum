import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import settingImage from "../assets/icons/ic_dollar.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";

export default (DollarIcon = (props) => {
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
      <TouchableOpacity onPress={Actions.MovieDetails}>
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
      </TouchableOpacity>
    </View>
  );
});
