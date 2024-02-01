import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from './src/LoginScreen';
import AuthProviders from './src/Providers/AuthProviders';
export default function App() {
  return (
    <AuthProviders>
      <SafeAreaProvider>
      {/* <View>
        <Text>App</Text>
        <Icon name="file-code-o" size={30} color="black" />
      </View> */}
      <LoginScreen/>
    </SafeAreaProvider>
    </AuthProviders>
  );
}

const styles = StyleSheet.create({});
