import React from "react";
import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
// import { IconAsset, Strings, UiColor } from "../../theme";
// import { HeaderWithGoBackAndOption } from "../../components/AppHeader";
import styles from "../ComponentStyles/movieStyles";
import { Col, Row, Grid } from "react-native-easy-grid";
// import { connect } from 'react-redux';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{}}>
          <View style={{ position: "absolute", top: 0, left: 1 }}>
            <Image
              source={{
                uri:
                  "https://i.ebayimg.com/images/g/ba0AAOSwRvdZZp26/s-l300.jpg",
              }}
              style={styles.fullImg}
            />
            <Image
              source={require("../../assets/img/cut_bookmark.png")}
              style={styles.icon}
            />
          </View>

          <View style={{ flexDirection: "row-reverse" }}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={{
                  uri:
                    "https://i.ebayimg.com/images/g/ba0AAOSwRvdZZp26/s-l300.jpg",
                }}
                style={styles.halfImgFirst}
              />

              <Image
                source={require("../../assets/img/cut_bookmark.png")}
                style={styles.icon}
              />

              <Image
                source={{
                  uri:
                    "https://i.ebayimg.com/images/g/ba0AAOSwRvdZZp26/s-l300.jpg",
                }}
                style={styles.halfImgFirst}
              />
            </View>
            <Image
              source={require("../../assets/img/cut_bookmark.png")}
              style={styles.icon}
            />
          </View>

          <View style={{ flexDirection: "row-reverse" }}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={{
                  uri:
                    "https://i.ebayimg.com/images/g/ba0AAOSwRvdZZp26/s-l300.jpg",
                }}
                style={styles.halfImgFirst}
              />
              <Image
                source={require("../../assets/img/cut_bookmark.png")}
                style={styles.icon}
              />
              <Image
                source={{
                  uri:
                    "https://i.ebayimg.com/images/g/ba0AAOSwRvdZZp26/s-l300.jpg",
                }}
                style={styles.halfImgFirst}
              />
            </View>

            <Image
              source={require("../../assets/img/cut_bookmark.png")}
              style={styles.addIcon}
            />
          </View>
        </View>

        <View style={{ height: 90 }} />
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
export default Movies;
