import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Loader from '../../components/Loader';

import {Actions} from 'react-native-router-flux';
import {IconAsset, Strings, UiColor} from '../../theme';
import {HeaderWithGoBackAndOption} from '../../components/AppHeader';
import styles from './styles';
import {SliderBox} from 'react-native-image-slider-box';
import {Col, Row, Grid} from 'react-native-easy-grid';

const tabsData = [
  {text: 'MOVIES', id: 0},
  {text: 'SHOWS', id: 1},
  {text: 'SPORTS', id: 2},
  {text: 'FAN VIDEOS', id: 3},
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCheckbox: 0,
      images: [
        require('../../assets/img/cut_photo_img01.png'),
        require('../../assets/img/cut_photo_img02.png'),
        require('../../assets/img/cut_photo_img03.png'),
      ],
    };
  }

  CheckMe = selectedCheckbox => {
    this.setState({selectedCheckbox});
  };
  render() {
    return (
      <View>
        {HeaderWithGoBackAndOption('', Strings.APP_NAME)}
        <ScrollView>
          <View style={styles.mainContainer}>
            <SliderBox
              images={this.state.images}
              autoplay
              sliderBoxHeight={200}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              paginationBoxStyle={{
                position: 'absolute',
                right: 0,
                flexDirection: 'row-reverse',
              }}
            />

            <View style={styles.scrollContainer}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                <View style={{width: 15}} />

                {tabsData.map((item, index) => (
                  <View>
                    <View
                      key={item.id}
                      style={[
                        styles.item,
                        {
                          backgroundColor:
                            this.state.selectedCheckbox == index
                              ? '#fff'
                              : null,
                        },
                      ]}>
                      <TouchableOpacity
                        onPress={() => this.CheckMe(item.id)}
                        key={index.toString()}
                        style={{flexDirection: 'row'}}>
                        <Text
                          style={[
                            styles.itemText,
                            {
                              color:
                                this.state.selectedCheckbox == index
                                  ? '#000'
                                  : '#4990e2',
                            },
                          ]}>
                          {item.text}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{width: 15}} />
                  </View>
                ))}
                <View style={{width: 15}} />
              </ScrollView>
            </View>
            <View>
              <Grid>
                <Col
                  style={{
                    backgroundColor: '#635DB7',
                    height: 300,
                    margin: 5,
                  }}
                />
                <Col style={{height: 300, margin: 5}}>
                  <Grid>
                    <Col
                      style={{
                        backgroundColor: 'red',
                        height: 145,
                        marginRight: 5,
                      }}
                    />
                    <Col
                      style={{
                        backgroundColor: 'black',
                        height: 145,
                        marginLeft: 5,
                      }}
                    />
                  </Grid>
                  <Grid style={{marginTop: 10}}>
                    <Col
                      style={{
                        backgroundColor: 'black',
                        height: 145,
                        marginRight: 5,
                      }}
                    />
                    <Col
                      style={{
                        backgroundColor: 'red',
                        height: 145,
                        marginLeft: 5,
                      }}
                    />
                  </Grid>
                </Col>
              </Grid>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Home;
