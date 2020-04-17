import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import Loader from "../../components/Loader";

import { Actions } from "react-native-router-flux";
import { IconAsset, Strings, UiColor } from "../../theme";
import { HeaderWithGoBackAndOption } from "../../components/AppHeader";
import styles from "./styles";
import { SliderBox } from "react-native-image-slider-box";

import ScrollableTabView from "react-native-scrollable-tab-view";
import { Col, Row, Grid } from "react-native-easy-grid";
import Movies from "../../tabComponents/Components/Movies";
import Shows from "../../tabComponents/Components/Shows";
import Sports from "../../tabComponents/Components/Sports";
import FanVideos from "../../tabComponents/Components/FanVideos";
import { height } from "../../utils/Dimensions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require("../../assets/img/cut_photo_img01.png"),
        require("../../assets/img/cut_photo_img02.png"),
        require("../../assets/img/cut_photo_img03.png"),
      ],
    };
  }

  CheckMe = (selectedCheckbox) => {
    this.setState({ selectedCheckbox });
  };
  render() {
    return (
      <View>
        {HeaderWithGoBackAndOption("", Strings.APP_NAME)}
        <ScrollView>
          <View style={styles.mainContainer}>
            <SliderBox
              images={this.state.images}
              autoplay
              circleLoop
              sliderBoxHeight={200}
              onCurrentImagePressed={(index) =>
                console.warn(`image ${index} pressed`)
              }
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              paginationBoxStyle={{
                position: "absolute",
                right: 0,
                flexDirection: "row-reverse",
              }}
            />
          </View>

          <ScrollableTabView
            style={{ marginVertical: 25, backgroundColor: "#ccc" }}
            locked
            scrollWithoutAnimation
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
          <Movies />
        </ScrollView>
      </View>
    );
  }
}
export default Home;
