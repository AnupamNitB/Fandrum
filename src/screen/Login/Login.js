import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {IconAsset, Strings, UiColor} from '../../theme';
import styles from './styles';

// import withError from './withError';
// import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const validation = () => {
    //   withError.handleSignup(userName, mobile);
    // };
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.loginTextContainer}>
            <Text style={{fontSize: 32, fontWeight: 'bold', color: '#3068e3'}}>
              Login
            </Text>
            <Text style={styles.loginWithEmailAndPass}>
              Login with Email And Password
            </Text>
          </View>
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
          <View style={styles.inputContainer}>
            <Image
              source={IconAsset.ic_left}
              style={[styles.icon, styles.inputIcon]}
              resizeMode="contain"
            />
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
            />
          </View>

          <TouchableOpacity style={styles.restoreButtonContainer}>
            <Text>Forgot?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={Actions.Home}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={Actions.SignUp}>
            <Text>Do not have an account ? SignUp</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
export default Login;
