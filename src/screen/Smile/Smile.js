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
import { SliderBox } from "react-native-image-slider-box";

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
      "https://image.freepik.com/free-photo/trendy-female-with-cocktail-shopping-bags_23-2148170087.jpg",
  },
  {
    name: "ALIZARIN",
    hotSpot:
      "https://image.freepik.com/free-photo/elegant-young-woman-costume-hat-with-handbag-room_23-2148068413.jpg",
  },
  {
    name: "CLOUDS",
    hotSpot:
      "https://image.freepik.com/free-photo/low-angle-stylish-woman-with-handbag_23-2148353512.jpg",
  },
];
class Smile extends React.Component {
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
  render() {
    // const validation = () => {
    //   withError.handleSignup(userName, mobile);
    // };
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
            <View style={{ minHeight: 150 }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={item}
                horizontal={true}
                renderItem={({ item }) => (
                  <View style={styles.fanBox}>
                    <TouchableOpacity>
                      <Image
                        source={{ uri: item.hotSpot }}
                        style={styles.imageThumbnail2}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          alignSelf: "center",
                        }}
                      >
                        <Text style={styles.itemText}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <Text style={styles.videoTitle}>FAN VIDEO</Text>
            <View style={{ minHeight: 150 }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={item}
                horizontal={true}
                renderItem={({ item }) => (
                  <View style={styles.fanBox}>
                    <TouchableOpacity>
                      <Image
                        resizeMode="cover"
                        source={{ uri: item.hotSpot }}
                        style={styles.imageThumbnail}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          alignSelf: "center",
                        }}
                      >
                        <Text style={styles.itemText}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={{ minHeight: 150 }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={item}
                renderItem={({ item }) => (
                  <View style={styles.box}>
                    <Image
                      style={styles.likeImage}
                      source={{ uri: item.hotSpot }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        top: 25,
                        right: 5,
                        flexDirection: "column-reverse",
                        marginBottom: 10,
                      }}
                    >
                      <TouchableOpacity>
                        <Image
                          style={styles.socialIcon}
                          source={require("../../assets/icons/ic_sound.png")}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          style={styles.socialIcon}
                          source={require("../../assets/icons/ic_yoyo.png")}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          style={styles.socialIcon}
                          source={require("../../assets/icons/ic_unlike.png")}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.boxContent}>
                      <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, elit consectetur
                      </Text>
                      <View style={styles.buttons}>
                        <TouchableOpacity style={[styles.button, styles.view]}>
                          <Image
                            style={styles.icon}
                            source={require("../../assets/icons/ic_like.png")}
                          />
                          <Text>1000</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[styles.button, styles.profile]}
                        >
                          <Image
                            style={styles.icon}
                            source={require("../../assets/icons/ic_comment.png")}
                          />
                          <Text>1000</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[styles.button, styles.message]}
                        >
                          <Image
                            style={styles.icon}
                            source={require("../../assets/icons/ic_share.png")}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
              <View style={{ height: 50 }} />
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
export default Smile;
