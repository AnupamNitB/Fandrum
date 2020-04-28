import React, { useState } from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

import styles from "../ComponentStyles/discoverStyle";
import DiscoverCallAPI from "../../../../reduxprovider/actions/ActionDiscoverScreen";

import { connect } from "react-redux";

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discoverdata: [],
    };
  }

  componentWillMount() {
    this.props.DiscoverAPI();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.Discover) {
      this.setState({
        discoverdata: nextProps.Discover,
      });
    }
  }

  render() {
    console.log(this.state.discoverdata, "hello iam deiscove page");
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          {this.state.discoverdata &&
            this.state.discoverdata.length > 0 &&
            this.state.discoverdata.map((item, i) => (
              <View>
                <View key={i}>
                  <Image
                    // resizeMode="contain"
                    // source={require("../../../../assets/img/black.jpg")}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                    style={styles.bkImage}
                  />

                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 15,
                      marginTop: 45,
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
                        resizeMode="contain"
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
                    <Text style={styles.ratting}>{item.vote_average}/10</Text>
                    <Image
                      style={[styles.statIcon1, { marginLeft: 12 }]}
                      resizeMode="contain"
                      source={require("../../../../assets/img/cut_imdb.png")}
                    />
                  </View>
                  <Text style={styles.des}>{item.overview}</Text>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log("Discover State", state);
  return {
    Discover: state.discoverScreen,
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
