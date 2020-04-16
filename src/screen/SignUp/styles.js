import {StyleSheet} from 'react-native';
import {w, h, totalSize} from '../../utils/Dimensions';
import {UiColor, TextColor, TextSize} from '../../theme';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    backgroundColor: UiColor.WHITE,
    padding: 15,
  },
  inputContainer: {
    borderColor: UiColor.GRAY,
    backgroundColor: UiColor.WHITE,
    borderRadius: 5,
    borderWidth: 1.5,
    width: w(90),
    height: h(8),
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: h(15),
    // marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  buttonContainer: {
    height: w(12),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: w(90),
    borderRadius: 18,
    backgroundColor: UiColor.BLUE,
  },
  signUpText: {
    color: 'white',
  },
});
