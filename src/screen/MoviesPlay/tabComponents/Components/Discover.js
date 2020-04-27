import React, { useState } from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

import styles from "../ComponentStyles/discoverStyle";
import DiscoverCallAPI from "../../../../reduxprovider/actions/ActionDiscoverScreen";

import { connect } from "react-redux";

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.DiscoverAPI();
  }
  render() {
    console.log(this.props, "hello iam deiscove page");
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View>
            <Image
              // resizeMode="contain"
              // source={require("../../../../assets/img/black.jpg")}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${this.props.poster_path}`,
              }}
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
                  resizeMode="contain"
                  style={styles.socialIcon}
                  source={require("../../../../assets/img/cut_sideicon_01.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  resizeMode="contain"
                  style={styles.socialIcon}
                  source={require("../../../../assets/img/cut_sideicon_02.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  resizeMode="contain"
                  style={styles.socialIcon}
                  source={require("../../../../assets/img/cut_sideicon_03.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  resizeMode="contain"
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
                  resizeMode="contain"
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
const mapStateToProps = (state) => {
  console.log("Discover State", state);
  return {
    Discover: state.discoverScreen.Discover,
  };
};
const mapStateToDispatch = (dispatch) => {
  return {
    DiscoverAPI: () => dispatch(DiscoverCallAPI.DiscoverAPI()),
  };
};
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Discover);
