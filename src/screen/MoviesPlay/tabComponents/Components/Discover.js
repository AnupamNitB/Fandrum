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
              source={require("../../../../assets/img/black.jpg")}
              style={styles.bkImage}
            />

            <View
              style={{
                position: "absolute",
                top: 0,
                right: 15,
                marginTop: 55,
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
              marginLeft: 25,
            }}
          >
            <Text style={styles.actions}>Action 18+ HD</Text>
            <Text style={styles.comlpex}>
              Complex wittty funny . friendship .Summary
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.statIcon}
                resizeMode="contain"
                source={require("../../../../assets/icons/ic_star.png")}
              />
              <Text style={styles.ratting}>7/10</Text>
              <Image
                style={[styles.statIcon1, { marginLeft: 12 }]}
                resizeMode="contain"
                source={require("../../../../assets/img/cut_imdb.png")}
              />
            </View>
            <Text style={styles.des}>
              Lorem ipsum dolor sit amet, elit consectetur Lorem ipsum dolor sit
              amet, elit consectetur Lorem ipsum dolor sit amet, elit
              consectetur Lorem ipsum dolor sit amet, elit consectetur
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
