import React from 'react';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class LoginButton extends React.Component {
  render() {
    return (
       <GoogleSigninButton
          style={{width: 48, height: 48}}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn.bind(this)}
        />
    );	
  }
}
