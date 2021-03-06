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
import styles from "./styles";
import DropDown from "../../components/DropDown";
// import withError from './withError';
// import { connect } from 'react-redux';
const item = [
  {
    ratting: 7.2,
    name: "TURQUOISE",
    hotSpot:
      "https://b1.pngbarn.com/png/796/725/tv-show-icon-mega-2-my-wife-and-kids-my-wife-kids-movie-cover-png-clip-art.png",
  },
  {
    ratting: 3.2,
    name: "EMERALD",
    hotSpot:
      "https://m.media-amazon.com/images/M/MV5BYWVmZjMwMmUtM2Q2Yi00NDg1LWJkZWYtMjRmMjM2NTdhNzViXkEyXkFqcGdeQXVyMjk0NTE3OTI@._V1_.jpg",
  },
  {
    ratting: 9.2,
    name: "SUN FLOWER",
    hotSpot: "https://i.ebayimg.com/images/g/ba0AAOSwRvdZZp26/s-l300.jpg",
  },
  {
    ratting: 1.2,
    name: "CARROT",
    hotSpot:
      "https://m.media-amazon.com/images/M/MV5BYWVmZjMwMmUtM2Q2Yi00NDg1LWJkZWYtMjRmMjM2NTdhNzViXkEyXkFqcGdeQXVyMjk0NTE3OTI@._V1_.jpg",
  },
  {
    ratting: 2.2,
    name: "ALIZARIN",
    hotSpot:
      "https://m.media-amazon.com/images/M/MV5BYWVmZjMwMmUtM2Q2Yi00NDg1LWJkZWYtMjRmMjM2NTdhNzViXkEyXkFqcGdeQXVyMjk0NTE3OTI@._V1_.jpg",
  },
  {
    ratting: 3.2,
    name: "CLOUDS",
    hotSpot:
      "https://m.media-amazon.com/images/M/MV5BYWVmZjMwMmUtM2Q2Yi00NDg1LWJkZWYtMjRmMjM2NTdhNzViXkEyXkFqcGdeQXVyMjk0NTE3OTI@._V1_.jpg",
  },
];
class Play extends React.Component {
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
        <ScrollView>
          <View>
            <Image
              // resizeMode="contain"
              source={require("../../assets/img/cut_main_banner_01.png")}
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
                  source={require("../../assets/img/cut_sideicon_01.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.socialIcon}
                  source={require("../../assets/img/cut_sideicon_02.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.socialIcon}
                  source={require("../../assets/img/cut_sideicon_03.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.socialIcon}
                  source={require("../../assets/img/cut_sideicon_04.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.socialIcon}
                  source={require("../../assets/img/cut_sideicon_05.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.socialIcon}
                  source={require("../../assets/img/cut_sideicon_06.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              flexDirection: "row-reverse",
            }}
          >
            <View style={styles.buttons}>
              <TouchableOpacity style={[styles.button]}>
                <Text style={styles.btnContainer}>GENIAL</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button]}>
                <Text style={styles.btnContainer}>BORING</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button]}>
                <Text style={styles.btnContainer}>FRIDY MOVIE</Text>
              </TouchableOpacity>
              <View style={{ height: 30 }} />
            </View>
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
export default Play;
