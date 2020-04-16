import {StyleSheet} from 'react-native';
import {w, h, totalSize} from '../../utils/Dimensions';
import {UiColor, TextColor, TextSize} from '../../theme';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  scrollContainer: {
    backgroundColor: UiColor.GRAY,
    height: h(5),
    width: w(100),
    marginTop: 20,
  },

  item: {
    color: 'pink',
    fontWeight: '500',
    borderRadius: 50,
    borderColor: '#056ce3',
    // borderBottomWidth: 1,
    padding: 1,
    marginHorizontal: 5,
    paddingLeft: 22,
    paddingRight: 8,
    paddingVertical: 6,
  },
  itemText: {
    fontSize: 12,
    color: UiColor.GRAY,
  },
});
