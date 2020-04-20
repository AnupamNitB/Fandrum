import React, { useState } from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
// import { IconAsset, Strings, UiColor } from "../../theme";
// import { HeaderWithGoBackAndOption } from "../../components/AppHeader";
import styles from "../ComponentStyles/discoverStyle";

// import { connect } from 'react-redux';

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View>
            <Image
              // resizeMode="contain"
              source={require("../../../../assets/img/cut_main_banner_01.png")}
              style={styles.bkImage}
            />
            <View
              style={{
                position: "absolute",
                top: 0,
                right: 5,
                marginTop: 95,
              }}
            >
              <TouchableOpacity>
                <Image
                  style={styles.socialIcon}
                  source={require("../../../../assets/img/cut_sideicon_01.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.socialIcon}
                  source={require("../../../../assets/img/cut_sideicon_02.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.socialIcon}
                  source={require("../../../../assets/img/cut_sideicon_03.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.socialIcon}
                  source={require("../../../../assets/img/cut_sideicon_04.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.socialIcon}
                  source={require("../../../../assets/img/cut_sideicon_05.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.socialIcon}
                  source={require("../../../../assets/img/cut_sideicon_06.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#fff",
                marginVertical: 10,
                fontWeight: "600",
              }}
            >
              Action 18+ HD
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#fff",
                marginVertical: 10,
                fontWeight: "600",
              }}
            >
              Complex wittty funny . friendship .Summary
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#fff",
                marginVertical: 12,
                fontWeight: "600",
              }}
            >
              Lorem ipsum dolor sit amet, elit consectetur Lorem ipsum dolor sit
              amet, elit consectetur
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
// const mapStateToProps = state => {
//   console.log(state);
//   return {};
// };
// const mapStateToDispatch = dispatch => {
//   return {};
// };
export default Discover;
