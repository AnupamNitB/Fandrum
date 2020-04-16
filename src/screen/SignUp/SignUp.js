import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {IconAsset, Strings, UiColor} from '../../theme';
import {HeaderWithGoBack} from '../../components/AppHeader';
import styles from './styles';
// import withError from './withError';
// import {connect} from 'react-redux';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const validation = () => {
    //   withError.handleSignup(userName, mobile);
    // };
    return (
      <View>
        {HeaderWithGoBack(Actions.Login, '')}
        <ScrollView>
          <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
              <Image
                source={IconAsset.ic_left}
                style={[styles.icon, styles.inputIcon]}
                resizeMode="contain"
              />
              <TextInput
                style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
              />
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.signUpText}>SignUp</Text>
            </TouchableOpacity>
          </View>
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
export default SignUp;
