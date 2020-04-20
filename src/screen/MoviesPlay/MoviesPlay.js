import React, { useState } from "react";
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { IconAsset, Strings, UiColor } from "../../theme";
import { HeaderWithGoBackAndOption } from "../../components/AppHeader";
import ScrollableTabView from "react-native-scrollable-tab-view";
import styles from "./styles";
import Movies from "./tabComponents/Components/Movies";
import Shows from "./tabComponents/Components/Shows";
import Sports from "./tabComponents/Components/Sports";
import FanVideos from "./tabComponents/Components/FanVideos";
import Discover from "./tabComponents/Components/Discover";
import Exploer from "./tabComponents/Components/Exploer";
// import withError from './withError';
// import { connect } from 'react-redux';
const item = [
  {
    name: "TURQUOISE",
    hotSpot:
      "https://b1.pngbarn.com/png/796/725/tv-show-icon-mega-2-my-wife-and-kids-my-wife-kids-movie-cover-png-clip-art.png",
  },
  {
    name: "EMERALD",
    hotSpot:
      "https://m.media-amazon.com/images/M/MV5BYWVmZjMwMmUtM2Q2Yi00NDg1LWJkZWYtMjRmMjM2NTdhNzViXkEyXkFqcGdeQXVyMjk0NTE3OTI@._V1_.jpg",
  },
  {
    name: "SUN FLOWER",
    hotSpot: "https://i.ebayimg.com/images/g/ba0AAOSwRvdZZp26/s-l300.jpg",
  },
  {
    name: "CARROT",
    hotSpot:
      "https://m.media-amazon.com/images/M/MV5BYWVmZjMwMmUtM2Q2Yi00NDg1LWJkZWYtMjRmMjM2NTdhNzViXkEyXkFqcGdeQXVyMjk0NTE3OTI@._V1_.jpg",
  },
  {
    name: "ALIZARIN",
    hotSpot:
      "https://m.media-amazon.com/images/M/MV5BYWVmZjMwMmUtM2Q2Yi00NDg1LWJkZWYtMjRmMjM2NTdhNzViXkEyXkFqcGdeQXVyMjk0NTE3OTI@._V1_.jpg",
  },
  {
    name: "CLOUDS",
    hotSpot:
      "https://m.media-amazon.com/images/M/MV5BYWVmZjMwMmUtM2Q2Yi00NDg1LWJkZWYtMjRmMjM2NTdhNzViXkEyXkFqcGdeQXVyMjk0NTE3OTI@._V1_.jpg",
  },
];
class MoviesPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const validation = () => {
    //   withError.handleSignup(userName, mobile);
    // };
    return (
      <View style={styles.mainContainer}>
        {HeaderWithGoBackAndOption("", Strings.APP_NAME)}
        <ScrollableTabView
          style={{}}
          locked
          scrollWithoutAnimation
          tabBarBackgroundColor={"#f5f2f2"}
          tabBarTextStyle={styles.tabBarTextStyle}
          tabBarInactiveTextColor={"#000"}
          tabBarActiveTextColor={"#E10264"}
          tabBarUnderlineStyle={styles.underlineStyle}
        >
          <Movies tabLabel="MOVIES" />
          <Sports tabLabel="SPORTS" />
          <Shows tabLabel="SHOWS" />
          <FanVideos tabLabel="FUN VIDEO" />
        </ScrollableTabView>
        <View style={{ flex: 8 }}>
          <ScrollableTabView
            style={{}}
            locked
            scrollWithoutAnimation
            tabBarBackgroundColor={"#ccc"}
            tabBarTextStyle={styles.tabBarTextStyle}
            tabBarInactiveTextColor={"#000"}
            tabBarActiveTextColor={"#E10264"}
            tabBarUnderlineStyle={styles.underlineStyle}
          >
            <Discover tabLabel="DISCOVER" />
            <Exploer tabLabel="EXPLOER" />
          </ScrollableTabView>
        </View>
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
export default MoviesPlay;
