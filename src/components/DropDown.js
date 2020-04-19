import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { IconAsset, Strings, UiColor } from "../theme";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
// import withError from './withError';
// import { connect } from 'react-redux';

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const validation = () => {
    //   withError.handleSignup(userName, mobile);
    // };
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <MenuProvider style={{ flexDirection: "column" }}>
          <Menu onSelect={(value) => alert(`You Clicked : ${value}`)}>
            <MenuTrigger>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#E10264",
                }}
              >
                <Text style={styles.headerText}>Genre</Text>

                <Image
                  style={[
                    styles.icon,
                    {
                      marginLeft: 15,
                      marginRight: 5,
                      marginTop: 18,
                      width: 14,
                      height: 14,
                    },
                  ]}
                  source={{
                    uri:
                      "https://img.icons8.com/small/14/000000/double-tick.png",
                  }}
                />
              </View>
            </MenuTrigger>

            <MenuOptions>
              <MenuOption value={"Login"}>
                <Text style={styles.menuContent}>Login</Text>
              </MenuOption>
              <MenuOption value={"Register"}>
                <Text style={styles.menuContent}>Register</Text>
              </MenuOption>
              <MenuOption value={"Download"}>
                <Text style={styles.menuContent}>Download</Text>
              </MenuOption>
              <MenuOption value={"Logout"}>
                <Text style={styles.menuContent}>Logout</Text>
              </MenuOption>
              <MenuOption value={3} disabled={true}>
                <Text style={styles.menuContent}>Disabled Menu</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </MenuProvider>
        <MenuProvider style={{ flexDirection: "column" }}>
          <Menu onSelect={(value) => alert(`You Clicked : ${value}`)}>
            <MenuTrigger>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#E10264",
                }}
              >
                <Text style={styles.headerText}>Order By</Text>

                <Image
                  style={[
                    styles.icon,
                    {
                      marginLeft: 15,
                      marginRight: 5,
                      marginTop: 18,
                      width: 14,
                      height: 14,
                    },
                  ]}
                  source={{
                    uri:
                      "https://img.icons8.com/small/14/000000/double-tick.png",
                  }}
                />
              </View>
            </MenuTrigger>

            <MenuOptions>
              <MenuOption value={"Login"}>
                <Text style={styles.menuContent}>NameBy</Text>
              </MenuOption>
              <MenuOption value={"Register"}>
                <Text style={styles.menuContent}>Date</Text>
              </MenuOption>
              <MenuOption value={"Download"}>
                <Text style={styles.menuContent}>Favourite</Text>
              </MenuOption>
              <MenuOption value={"Logout"}>
                <Text style={styles.menuContent}>Logout</Text>
              </MenuOption>
              <MenuOption value={3} disabled={true}>
                <Text style={styles.menuContent}>Disabled Menu</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </MenuProvider>
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

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
  menuContent: {
    color: "#000",
    fontWeight: "400",
    padding: 0,
    fontSize: 20,
  },
});
