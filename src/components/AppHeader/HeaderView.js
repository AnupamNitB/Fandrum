import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {IconAsset, Strings, UiColor} from '../../theme';
import {styles} from './styles';
import {Actions} from 'react-native-router-flux';

export const HeaderWithGoBackAndOption = (onGoBack, title, onDownloadPDF) => {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity>
        <Image
          // source={require('../../assets/img/img_logo.png')}
          source={IconAsset.img}
          style={styles.icon_menu}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={{position: 'absolute', left: 0, right: 0}}>
        <Text style={styles.header_title}>{title}</Text>
      </View>

      <View style={styles.right_items}>
        <TouchableOpacity>
          <Image
            source={IconAsset.ic_search}
            style={styles.icon_list_type}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={IconAsset.ic_user}
            style={styles.icon_list_type}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
