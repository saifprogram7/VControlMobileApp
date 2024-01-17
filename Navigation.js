// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/SignInScreen/LoginScreen';
import SignUpScreen from './src/SignUpScreen/SignUpScreen';
import ResetPassword from './src/ResetPassword/ResetPassword';
import ForgottenPassword from './src/ForgottenPassword/ForgottenPassword';
import ConfirmationEmail from './src/ConfirmationEmail/ConfirmationEmail';
import AccountRegistered from './src/AccountRegistered/AccountRegistered';
import ResetPasswordConfirmation from './src/ResetPasswordConfirmation';
import LoadingEffect from './src/LoadingEffect/LoadingEffect';
import ChatInterface from './src/ChatInterface/ChatInterface';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Reset Password" component={ResetPassword} />
      <Stack.Screen name="Forgot Password" component={ForgottenPassword} />
      <Stack.Screen name="Confirm Email" component={ConfirmationEmail} />
      <Stack.Screen name="Account Registered" component={AccountRegistered} />
      <Stack.Screen name="Reset Password Confirmation" component={ResetPasswordConfirmation} />
      <Stack.Screen name="Loading Effect" component={LoadingEffect} />
      <Stack.Screen name="Chat Interface" component={ChatInterface} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
