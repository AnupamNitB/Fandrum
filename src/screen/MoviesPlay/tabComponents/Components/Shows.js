import React, { useState } from "react";
import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
// import { IconAsset, Strings, UiColor } from "../../theme";
// import { HeaderWithGoBackAndOption } from "../../components/AppHeader";
import styles from "../ComponentStyles/movieStyles";

// import { connect } from 'react-redux';

class Shows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <View style={styles.mainContainer} />;
  }
}
// const mapStateToProps = state => {
//   console.log(state);
//   return {};
// };
// const mapStateToDispatch = dispatch => {
//   return {};
// };
export default Shows;
