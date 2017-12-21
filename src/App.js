import React from 'react';
import { StackNavigator } from 'react-navigation';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { SignUpScreen } from './screens/SignUpScreen';

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      headerTitle: 'Inscription',
    },
  },
});

export default RootNavigator;