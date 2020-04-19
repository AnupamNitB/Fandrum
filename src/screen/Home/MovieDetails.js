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
import styles from "./MovieDetailsStyles";

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
class MovieDetails extends React.Component {
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

        <Image
          style={styles.bannerImg}
          source={require("../../assets/img/cut_video_img01.png")}
        />
        <ScrollView>
          <View style={styles.box}>
            <Image
              style={styles.imageContent}
              source={require("../../assets/img/cut_thumb_03.png")}
            />

            <View style={styles.boxContent}>
              <View style={styles.buttons}>
                <TouchableOpacity style={[styles.button]}>
                  <Text style={styles.btnContainer}>COMEDY</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button]}>
                  <Text style={styles.btnContainer}>AGE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button]}>
                  <Text style={styles.btnContainer}>FULL HD</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.title}>Dr Dolitlte 2020</Text>
                <Image
                  style={styles.socialIcon}
                  source={require("../../assets/icons/ic_yoyo.png")}
                />
              </View>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, elit consectetur
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={styles.commentIcon}
                  source={require("../../assets/icons/ic_comment.png")}
                />
                <Text style={styles.comment}>550 comment about this</Text>
              </View>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", marginVertical: 25, padding: 5 }}
          >
            <Image
              style={styles.netflixImgs}
              source={require("../../assets/img/cut_netflix_logo.png")}
            />
            <Image
              style={styles.netflixImgs}
              source={require("../../assets/img/cut_hulu_logo.png")}
            />
            <Image
              style={styles.netflixImgs}
              source={require("../../assets/img/cut_amazon_prime_logo.png")}
            />
            <Image
              style={styles.netflixImgs}
              source={require("../../assets/img/cut_tube_logo.png")}
            />
          </View>
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
          </View>
          <View style={{ flexDirection: "row", backgroundColor: "#f0faf9" }}>
            <Image
              style={styles.emojiIcon}
              source={require("../../assets/img/cut_smileyface_01.png")}
            />
            <Image
              style={styles.emojiIcon}
              source={require("../../assets/img/cut_smileyface_02.png")}
            />
            <Image
              style={styles.emojiIcon}
              source={require("../../assets/img/cut_smileyface_03.png")}
            />
            <Image
              style={styles.emojiIcon}
              source={require("../../assets/img/cut_smileyface_04.png")}
            />
            <Image
              style={styles.emojiIcon}
              source={require("../../assets/img/cut_smileyface_05.png")}
            />
          </View>
          <View
            style={{
              backgroundColor: "#f0faf9",
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Image
              style={styles.progressIcon}
              source={require("../../assets/img/cut_progressline.png")}
            />
          </View>
          <View style={styles.row}>
            <Image
              style={styles.emojiIcon}
              source={require("../../assets/img/cut_smileyface_03.png")}
            />
            <View style={{ marginTop: 20 }}>
              <Text style={styles.nameTxt}>5/10</Text>
              <Text style={styles.nameTxt}>845</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 200,
              }}
            >
              <View style={{ borderEndWidth: 1, width: 80 }} />
              <Text style={styles.mblTxt}>CRITICS</Text>
            </View>
          </View>

          <View style={{ minHeight: 150, backgroundColor: "#f0faf9" }}>
            <Text style={styles.title}>CAST</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={item}
              horizontal={true}
              renderItem={({ item }) => (
                <View style={styles.fanBox}>
                  <TouchableOpacity>
                    <Image
                      source={{ uri: item.hotSpot }}
                      style={styles.imageThumbnail}
                    />
                    <View
                      style={{
                        alignSelf: "center",
                      }}
                    >
                      <Text style={styles.itemText}>{item.name}</Text>
                      <Text style={styles.itemText}>{item.name}</Text>
                      <View style={{ height: 10 }} />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 10,
                marginTop: 30,
                alignItems: "center",
                height: 50,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "700" }}>
                USERS REVIEW
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "700",
                  textDecorationLine: "underline",
                }}
              >
                VIEW ALL
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 15,
              marginTop: 20,
              backgroundColor: "#fff",
            }}
          >
            <Image
              style={styles.socialIcon}
              source={require("../../assets/img/cut_smileyface_03.png")}
            />
            <View>
              <Text style={styles.interestingText}>
                5/10 interesting fabulous adventure
              </Text>
              <Text style={styles.subTitle}>Lorem ipsum dolor sit amet,</Text>
            </View>
          </View>

          <Text style={styles.des}>
            Lorem ipsum dolor sit amet, elit consectetur Lorem ipsum dolor sit
            amet, elit consectetur
          </Text>

          <Text
            style={{
              fontSize: 12,
              fontWeight: "700",
              textDecorationLine: "underline",
              marginTop: 15,
              marginLeft: 18,
            }}
          >
            ADD COMMENTS
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              marginTop: 30,
              backgroundColor: "#f0faf9",
              height: 50,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "700",
              }}
            >
              CONTENT AND CRITICISM
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "700",
                textDecorationLine: "underline",
              }}
            >
              VIEW ALL
            </Text>
          </View>
          <View style={{ height: 20, height: 80, backgroundColor: "#fff" }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                marginTop: 30,
                marginLeft: 10,
              }}
            >
              Critics
            </Text>
            <Text
              style={{
                fontSize: 12,

                marginTop: 10,
                marginLeft: 10,
              }}
            >
              Age of Greek, ALAMO CITY MOVIE TALK
            </Text>
          </View>
          <View style={{ height: 60, backgroundColor: "#f0faf9" }}>
            <Text style={styles.videoTitle}>FAN VIDEO</Text>
          </View>
          <View style={{ minHeight: 150 }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={item}
              horizontal={true}
              renderItem={({ item }) => (
                <View style={styles.fanBox1}>
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
          <View style={{ height: 60, backgroundColor: "#f0faf9" }}>
            <Text style={styles.videoTitle}>MOVIES SIMILAR</Text>
          </View>

          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={item}
              horizontal={true}
              renderItem={({ item }) => (
                <View style={styles.fanBox}>
                  <TouchableOpacity>
                    <Image
                      source={{ uri: item.hotSpot }}
                      style={styles.imageThumbnail}
                    />
                    <View
                      style={{
                        alignSelf: "center",
                      }}
                    >
                      <Text style={styles.itemText}>{item.name}</Text>
                      <Text style={styles.itemText}>{item.name}</Text>
                      <View style={{ height: 10 }} />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
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
export default MovieDetails;
