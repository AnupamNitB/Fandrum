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
import ScrollableTabView, {
  DefaultTabBar,
} from "react-native-scrollable-tab-view";
import { Col, Row, Grid } from "react-native-easy-grid";
// import MOVIES from "./Components/Movies";

const tabsData = [
  { text: "MOVIES", id: 0 },
  { text: "SHOWS", id: 1 },
  { text: "SPORTS", id: 2 },
  { text: "FAN VIDEOS", id: 3 },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCheckbox: 0,
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
          {/* <ScrollableTabView
            renderTabBar={() => <CustomTabBar someProp={"here"} />}
          >
            <MOVIES tabLabel="React" />
          </ScrollableTabView> */}
        </ScrollView>
      </View>
    );
  }
}
export default Home;