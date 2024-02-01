import {View, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import {Text, Input, Button, SocialIcon} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from './Providers/AuthProviders';
const LoginScreen = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [facebookLoading, setFacebookLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const {signInWithEmailPassword} = useContext(AuthContext);
  const handelLogin = () => {
    console.log('handel login');
    signInWithEmailPassword();
    setLoading(true);
  };
  return (
    <View style={styles.container}>
      <Text h2 h2Style={{color: '#e54747', marginBottom: 50}}>
        Login Here
      </Text>
      <Input
        containerStyle={{width: '100%'}}
        disabledInputStyle={{background: '#ddd'}}
        inputContainerStyle={{}}
        errorMessage={error}
        leftIcon={<Icon name="email" size={20} />}
        leftIconContainerStyle={{}}
        placeholder="Enter Email"
      />
      <Input
        containerStyle={{width: '100%'}}
        disabledInputStyle={{background: '#ddd'}}
        inputContainerStyle={{}}
        errorMessage={error}
        leftIcon={<Icon name="lock" size={20} />}
        leftIconContainerStyle={{}}
        placeholder="Enter password"
        secureTextEntry={true}
      />
      <Button
        buttonStyle={{
          padding: 15,
          borderRadius: 8,
          backgroundColor: '#e54747',
          fontSize: 80,
        }}
        containerStyle={{margin: 5, width: '100%'}}
        disabledStyle={{
          borderWidth: 2,
          borderColor: '#00F',
        }}
        disabledTitleStyle={{color: '#00F'}}
        linearGradientProps={null}
        icon={<Icon name="login" size={25} color="#FFFF" />}
        iconContainerStyle={{background: '#000'}}
        loadingProps={{animating: true}}
        loadingStyle={{}}
        loading={loading}
        onPress={handelLogin}
        title="Login Now"
        titleProps={{}}
        titleStyle={{marginHorizontal: 5}}
      />

      {/* <Text h4>OR</Text> */}
      <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <SocialIcon
          button
          fontStyle={{}}
          iconSize={25}
          iconStyle={{}}
          iconType="font-awesome"
          light
          loading={googleLoading}
          onLongPress={handelLogin}
          onPress={() => console.log('onPress()')}
          style={{paddingHorizontal: 10}}
          type="google"
        />
        <SocialIcon
          button
          fontStyle={{}}
          iconSize={25}
          iconStyle={{}}
          iconType="font-awesome"
          light
          loading={facebookLoading}
          onLongPress={() => console.log('onLongPress()')}
          onPress={() => console.log('onPress()')}
          style={{paddingHorizontal: 10}}
          type="facebook"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  hairlineWidth: {
    width: 10,
    borderBottomColor: 'black',
  },
});
export default LoginScreen;
/* 
 import * as React from "react";
import { SocialIcon } from "@rneui/base";

export default () => {
  return (
    <SocialIcon
      button
      fontStyle={{}}
      iconSize={25}
      iconStyle={{}}
      iconType="font-awesome"
      light
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onPress()")}
      style={{ paddingHorizontal: 10 }}
      type="google"
    />
  );
}
*/
