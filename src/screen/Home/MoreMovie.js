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
import styles from "./MoreMovieStyles";
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
class MoreMovie extends React.Component {
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
        <Text style={styles.movieText}>Movies</Text>
        <View style={styles.dropdownContainer}>
          <Text style={styles.genre}>Genre</Text>
          <Image
            style={[
              styles.icon,
              {
                marginLeft: 15,
                marginRight: 5,
                width: 14,
                height: 14,
              },
            ]}
            source={require("../../assets/icons/ic_down.png")}
          />

          <Text style={styles.genre}>OrderBy</Text>
          <Image
            style={[
              styles.icon,
              {
                marginLeft: 15,
                marginRight: 5,
                width: 14,
                height: 14,
              },
            ]}
            source={require("../../assets/icons/ic_down.png")}
          />
        </View>
        <ScrollView>
          <View style={styles.mainContainer}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={item}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity>
                    <View style={styles.row}>
                      <Image
                        source={{ uri: item.hotSpot }}
                        style={styles.likeImage}
                      />
                      <View>
                        <Text style={{ marginLeft: 15 }}>#</Text>
                        <View style={styles.nameContainer}>
                          <Text style={styles.nameTxt}>{item.name}</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                          <Image
                            style={[
                              styles.icon,
                              {
                                marginLeft: 15,
                                marginRight: 5,
                                width: 25,
                                height: 25,
                              },
                            ]}
                            source={require("../../assets/icons/ic_star.png")}
                          />
                          <Text style={styles.nameTxt}>{item.ratting}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />

            <View style={{ height: 40 }} />
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
export default MoreMovie;
