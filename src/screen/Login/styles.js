import {StyleSheet} from 'react-native';
import {w, h, totalSize} from '../../utils/Dimensions';
import {UiColor, TextColor, TextSize} from '../../theme';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: UiColor.WHITE,
  },
  loginTextContainer: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginBottom: 20,
    marginTop: h(25),
  },
  loginText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  loginWithEmailAndPass: {
    fontSize: 15,
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
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  icon: {
    width: w(4),
    height: h(5),
  },
  inputIcon: {
    // marginLeft: 15,
    justifyContent: 'center',
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
  loginText: {
    color: 'white',
  },
  restoreButtonContainer: {
    width: w(80),
    marginBottom: 15,
    alignItems: 'flex-end',
  },
});
