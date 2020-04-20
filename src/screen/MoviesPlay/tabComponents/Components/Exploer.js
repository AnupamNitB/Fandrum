import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { w, h, totalSize } from "../../../../utils/Dimensions";
import styles from "../ComponentStyles/exploerStyles";

// import { connect } from 'react-redux';

class Exploer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={{ flexDirection: "row", marginVertical: 30 }}>
            <Text style={styles.fantasyText}>. FANTASY</Text>
            <Text style={styles.fantasyText}>. ADVENTURE</Text>
            <Text style={styles.fantasyText}>. ACTION</Text>
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
          <Text
            style={{
              fontWeight: "500",
              fontSize: 14,
              marginVertical: 10,
              marginLeft: 8,
            }}
          >
            STRONG PROTAGONISTS
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{}}>
              <TouchableOpacity onPress={Actions.MovieDetails}>
                <ImageBackground
                  source={require("../../../../assets/img/cut_thumb_main.png")}
                  style={styles.fullImg}
                >
                  <Image
                    source={require("../../../../assets/img/cut_bookmark.png")}
                    style={styles.icon}
                  />
                  <View
                    style={{
                      height: 40,
                      width: w(48),
                      backgroundColor: "#D3D3D399",
                      position: "absolute",
                      bottom: 0,
                      paddingHorizontal: 5,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row", marginTop: 18 }}>
                      <Image
                        source={require("../../../../assets/img/cut_comment.png")}
                        style={{ height: 20, width: 20 }}
                      />
                      <Text style={{ marginLeft: 5, color: "#fff" }}>129</Text>
                    </View>

                    <Image
                      source={require("../../../../assets/img/cut_logo_disney.png")}
                      style={{ height: 20, width: 20, marginTop: 18 }}
                    />
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={Actions.MovieDetails}>
                  <ImageBackground
                    source={require("../../../../assets/img/cut_thumb_01.png")}
                    style={styles.halfImgFirst}
                  >
                    <Image
                      source={require("../../../../assets/img/cut_bookmark.png")}
                      style={styles.icon}
                    />
                    <View
                      style={{
                        height: 25,
                        width: w(20),
                        backgroundColor: "#D3D3D399",
                        position: "absolute",
                        bottom: 0,
                        padding: 5,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../../../../assets/img/cut_comment.png")}
                          style={{ height: 14, width: 14, marginTop: 5 }}
                        />
                        <Text
                          style={{
                            marginLeft: 5,
                            color: "#fff",
                            fontSize: 12,
                            marginTop: 2,
                          }}
                        >
                          129
                        </Text>
                      </View>

                      <Image
                        source={require("../../../../assets/img/cut_logo_hulu.png")}
                        style={{ height: 10, width: 10, marginTop: 5 }}
                      />
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.MovieDetails}>
                  <ImageBackground
                    source={require("../../../../assets/img/cut_thumb_02.png")}
                    style={styles.halfImgFirst}
                  >
                    <Image
                      source={require("../../../../assets/img/cut_bookmark.png")}
                      style={styles.icon}
                    />
                    <View
                      style={{
                        height: 25,
                        width: w(20),
                        backgroundColor: "#D3D3D399",
                        position: "absolute",
                        bottom: 0,
                        padding: 5,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../../../../assets/img/cut_comment.png")}
                          style={{ height: 14, width: 14, marginTop: 5 }}
                        />
                        <Text
                          style={{
                            marginLeft: 5,
                            color: "#fff",
                            fontSize: 12,
                            marginTop: 2,
                          }}
                        >
                          129
                        </Text>
                      </View>

                      <Image
                        source={require("../../../../assets/img/cut_logo_netflix.png")}
                        style={{ height: 10, width: 10, marginTop: 5 }}
                      />
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={Actions.MovieDetails}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://i.ebayimg.com/images/g/ba0AAOSwRvdZZp26/s-l300.jpg",
                    }}
                    style={styles.halfImgFirst}
                  >
                    <Image
                      source={require("../../../../assets/img/cut_bookmark.png")}
                      style={styles.icon}
                    />
                    <View
                      style={{
                        height: 25,
                        width: w(20),
                        backgroundColor: "#D3D3D399",
                        position: "absolute",
                        bottom: 0,
                        padding: 5,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../../../../assets/img/cut_comment.png")}
                          style={{ height: 14, width: 14, marginTop: 5 }}
                        />
                        <Text
                          style={{
                            marginLeft: 5,
                            color: "#fff",
                            fontSize: 12,
                            marginTop: 2,
                          }}
                        >
                          129
                        </Text>
                      </View>

                      <Image
                        source={require("../../../../assets/img/cut_logo_netflix.png")}
                        style={{ height: 10, width: 10, marginTop: 5 }}
                      />
                    </View>
                  </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={Actions.MoreMovie}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://us.123rf.com/450wm/claudiodivizia/claudiodivizia1604/claudiodivizia160401991/56023614-pink-colour-paper-useful-as-a-background-texture.jpg?ver=6",
                    }}
                    style={styles.halfImgFirst}
                    resizeMode="cover"
                  >
                    <Image
                      source={require("../../../../assets/img/cut_add_more.png")}
                      style={{
                        position: "absolute",
                        top: 30,
                        left: 22,

                        width: 22,
                        height: 22,
                      }}
                    />
                    <Text
                      style={{
                        color: "#fff",
                        marginVertical: 55,
                        textAlign: "center",
                      }}
                    >
                      25955
                    </Text>
                    <View
                      style={{
                        height: 25,
                        width: w(20),
                        backgroundColor: "#D3D3D399",
                        position: "absolute",
                        bottom: 0,
                        padding: 5,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    />
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ height: 40 }} />
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
export default Exploer;
