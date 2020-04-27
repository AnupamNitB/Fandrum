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
import DollarIcon from "./components/DollarIcon";
// import AsyncStorage from "@react-native-community/async-storage";
import Splash from "./screen/Splash";
// import Login from './screen/Login';
// import SignUp from './screen/SignUp';
import Home from "./screen/Home";
import MoreMovie from "./screen/Home/MoreMovie";
import MovieDetails from "./screen/Home/MovieDetails";
import Smile from "./screen/Smile";
import Play from "./screen/Play";
import MoviePlay from "./screen/MoviesPlay";

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
const dollarIcon = ({ img }) => {
  return (
    <Image
      source={img}
      style={{
        borderRadius: 50,
        height: 60,
        width: 60,
        borderColor: "#f1f1f1",
        borderWidth: 6,
        marginBottom: 45,
        backgroundColor: "#fd005c",
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
          <Scene
            component={MoreMovie}
            hideNavBar={true}
            key="MoreMovie"
            title="MoreMovie"
          />
          <Scene
            component={MovieDetails}
            hideNavBar={true}
            key="MovieDetails"
            title="MovieDetails"
          />
          <Scene component={Home} hideNavBar={true} key="Home" title="Home" />
          <Scene
            component={Smile}
            hideNavBar={true}
            key="Smile"
            title="Smile"
          />
          <Scene component={Play} hideNavBar={true} key="Play" title="Play" />
          <Scene
            component={MoviePlay}
            hideNavBar={true}
            key="MoviePlay"
            title="MoviePlay"
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
              title="DollarIcon"
              icon={dollarIcon}
              img={require("./assets/icons/ic_dollar1.png")}
            >
              <Scene
                component={DollarIcon}
                hideNavBar={true}
                key="DollarIcon"
                title="DollarIcon"
              />
            </Scene>
            <Scene
              title="Play"
              icon={TabIcon}
              img={require("./assets/icons/ic_play.png")}
            >
              <Scene
                component={Play}
                hideNavBar={true}
                key="Play"
                title="Play"
              />
            </Scene>
            <Scene
              title="MoviePlay"
              icon={TabIcon}
              img={require("./assets/icons/ic_ball.png")}
            >
              <Scene
                component={MoviePlay}
                hideNavBar={true}
                key="MoviePlay"
                title="MoviePlay"
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
