import React from 'react';
import {
  Text,
  View,
  Platform,
  ImageBackground,
  Dimensions
} from 'react-native';
import { Button, FormInput } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const LoginScreen = props => {
  return (
    <ImageBackground
      source={require('../assets/questions-login.png')}
      style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT + 10 }}
    >
      <View style={styles.container}>
        <Text style={styles.signInText}>Sign In</Text>
        <FormInput
          placeholder="email"
          containerStyle={styles.formContainerStyle}
          inputStyle={styles.formInputStyles}
        >
          <Text style={styles.formInputStyles}>Email</Text>
        </FormInput>
        <FormInput
          placeholder="password"
          containerStyle={styles.formContainerStyle}
        >
          <Text style={styles.formInputStyles}>Password</Text>
        </FormInput>
        <Button
          title="Login!"
          buttonStyle={styles.loginButtonStyle}
          titleStyle={styles.loginTitleStyle}
          onPress={() => props.navigation.navigate('main')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtonStyle: {
    borderRadius: 20,
    backgroundColor: 'black',
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 20
  },
  loginTitleStyle: {
    fontSize: 10,
    fontFamily:
      Platform.OS === 'android' ? 'notoserif' : 'AppleSDGothicNeo-Light'
  },
  signInText: {
    marginBottom: 30,
    fontSize: 40,
    fontFamily:
      Platform.OS === 'android' ? 'notoserif' : 'AppleSDGothicNeo-Light'
  },
  formContainerStyle: {
    width: 250,
    marginBottom: 50,
    alignItems: 'center',
    borderBottomColor: '#03CEA4',
    borderBottomWidth: 3
  },
  formInputStyles: {
    textAlign: 'center',
    color: 'black'
  }
};

export default LoginScreen;
