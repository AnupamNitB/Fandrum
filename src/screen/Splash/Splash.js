import React, { Component } from "react";
import { View, Image, ImageBackground } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./styles";
import { Strings } from "../../theme";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentWillMount() {
    try {
      setTimeout(() => {
        Actions.tabbar();
      }, 2000);
    } catch (error) {}
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require("../../assets/img/splash.png")}
          style={styles.splashImg}
        />
      </View>
    );
  }
}
export default Splash;
