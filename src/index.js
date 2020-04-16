import React from "react";
import {
  Scene,
  Router,
  Actions,
  Drawer,
  Stack,
} from "react-native-router-flux";
import { connect } from "react-redux";
import { Dimensions, Image } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Splash from "./screen/Splash";
// import Login from './screen/Login';
// import SignUp from './screen/SignUp';
import Home from "./screen/Home";
import Smile from "./screen/Smile";
import drawerContain from "./drawerContain";

const TabIcon = ({ img, focused }) => {
  return (
    <Image
      source={img}
      style={{
        width: 35,
        height: 35,
        tintColor: focused ? "#E10264" : "#000",
      }}
    />
  );
};

var width = Dimensions.get("window").width;
const RouterWithRedux = connect()(Router);

const Root = () => {
  return (
    <RouterWithRedux navigationBarStyle={{ backgroundColor: "#5dca67" }}>
      <Scene key="root" hideNavBar hideTabBar>
        <Stack key="app">
          <Scene
            component={Splash}
            hideNavBar={true}
            key="Splash"
            title="Splash"
            initial={true}
          />

          <Scene component={Home} hideNavBar={true} key="Home" title="Home" />
          <Scene
            component={Smile}
            hideNavBar={true}
            key="Smile"
            title="Smile"
          />
          <Scene
            key="tabbar"
            hideNavBar={true}
            tabs
            tabBarStyle={{ backgroundColor: "#FFFFFF", minHeight: 65 }}
          >
            <Scene
              title="Home"
              initial={true}
              icon={TabIcon}
              img={require("./assets/icons/ic_home.png")}
            >
              <Scene
                component={Home}
                hideNavBar={true}
                key="Home"
                title="Home"
              />
            </Scene>
            <Scene
              title="Smile"
              icon={TabIcon}
              img={require("./assets/icons/ic_smile.png")}
            >
              <Scene
                component={Smile}
                hideNavBar={true}
                key="Smile"
                title="Smile"
              />
            </Scene>
            <Scene
              title="Home"
              icon={TabIcon}
              img={require("./assets/icons/ic_dollar.png")}
            >
              <Scene
                component={Home}
                hideNavBar={true}
                key="Home"
                title="Home"
              />
            </Scene>
            <Scene
              title="Home"
              icon={TabIcon}
              img={require("./assets/icons/ic_play.png")}
            >
              <Scene
                component={Home}
                hideNavBar={true}
                key="Home"
                title="Home"
              />
            </Scene>
          </Scene>
        </Stack>
      </Scene>
    </RouterWithRedux>
  );
};

export default Root;
console.disableYellowBox = true;
