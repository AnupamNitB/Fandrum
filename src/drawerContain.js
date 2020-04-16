import React, { Component } from "react";

import {
  Alert,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  Image
} from "react-native";

class Expandable_ListView extends Component {
  constructor() {
    super();

    this.state = {
      layout_Height: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null
        };
      });
    } else {
      this.setState(() => {
        return {
          layout_Height: 0
        };
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }

  show_Selected_Category = item => {
    // Write your code here which you want to execute on sub category selection.
    Alert.alert(item);
  };

  render() {
    return (
      <View style={styles.Panel_Holder}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={styles.category_View}
        >
          <Text style={styles.category_Text}>
            {this.props.item.category_Name}{" "}
          </Text>

          <Image
            source={{
              uri:
                "https://reactnativecode.com/wp-content/uploads/2019/02/arrow_right_icon.png"
            }}
            style={styles.iconStyle}
          />
        </TouchableOpacity>

        <View style={{ height: this.state.layout_Height, overflow: "hidden" }}>
          {this.props.item.sub_Category.map((item, key) => (
            <TouchableOpacity
              key={key}
              style={styles.sub_Category_Text}
              onPress={this.show_Selected_Category.bind(this, item.name)}
            >
              <Text> {item.name} </Text>

              <View
                style={{ width: "100%", height: 1, backgroundColor: "#000" }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const array = [
      {
        expanded: false,
        category_Name: "Trend Spotters",
        sub_Category: [
          { id: 1, name: "Anna Larsen" },
          { id: 2, name: "Blaze" },
          { id: 3, name: "Bree Wilson" },
          { id: 4, name: "Emily Grace" },
          { id: 5, name: "Jonny Chronnic" },
          { id: 6, name: "Lucy Alexander" },
          { id: 7, name: "Misaki" }
        ]
      },

      {
        expanded: false,
        category_Name: "Brands",
        sub_Category: [
          { id: 8, name: "American Vintage" },
          { id: 9, name: "Blue Life" },
          { id: 10, name: "Bullhead denim co" },
          { id: 11, name: "Equipment" }
        ]
      },

      {
        expanded: false,
        category_Name: "Shop By Category",
        sub_Category: [
          { id: 12, name: "Accessories" },
          { id: 13, name: "Bag" },
          { id: 14, name: "Dress" },
          { id: 15, name: "Sports" },
          { id: 16, name: "Jackets" },
          { id: 17, name: "Jeans" },
          { id: 18, name: "Leggings" },
          { id: 19, name: "Make Up" }
        ]
      },

      {
        expanded: false,
        category_Name: "Latest Sports",
        sub_Category: []
      },

      {
        expanded: false,
        category_Name: "Stores",
        sub_Category: []
      },

      {
        expanded: false,
        category_Name: "Logout",
        sub_Category: []
      }
    ];

    this.state = { AccordionData: [...array] };
  }

  update_Layout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...this.state.AccordionData];

    array[index]["expanded"] = !array[index]["expanded"];

    this.setState(() => {
      return {
        AccordionData: array
      };
    });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}
        >
          {this.state.AccordionData.map((item, key) => (
            <Expandable_ListView
              key={item.category_Name}
              onClickFunction={this.update_Layout.bind(this, key)}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: "#F5FCFF",
    marginTop: 55
  },

  iconStyle: {
    width: 30,
    height: 30,
    justifyContent: "flex-end",
    alignItems: "center",
    tintColor: "#fff"
  },

  sub_Category_Text: {
    fontSize: 22,
    color: "#000",
    padding: 10
  },

  category_Text: {
    textAlign: "left",
    color: "#fff",
    fontSize: 21,
    padding: 10
  },

  category_View: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E10264"
  }
});
