import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/logo.png";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import SocialSignInButton from "../SocialSignInButton/SocialSignInButton";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPressed = () => {
    // Check if username and password are correct
    if (username === 'Admin' && password === 'admin') {
      // Navigate to Loading Effect screen
      navigation.navigate('Loading Effect');
    } else {
      // Display an alert if the credentials are incorrect
      Alert.alert('Invalid Credentials', 'Please enter the correct username and password.');
    }
  };

  const onForgottenPasswordPressed = () => {
    navigation.navigate('Forgot Password');
  };

  const onSignUpPressed = () => {
    navigation.navigate('Sign Up');
  };

  return (
    <View style={styles.appBackground}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <CustomInput
        value={username}
        setValue={setUsername}
        placeholder="Username"
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <CustomButton text="Login" onPress={onLoginPressed} />
      <CustomButton
        text="Forgot Password"
        onPress={onForgottenPasswordPressed}
        type="tertiary"
      />
      <Text style={styles.textFormat}>Sign in using another method</Text>
      <SocialSignInButton />
      <CustomButton
        text="Don't have an account? Create one"
        onPress={onSignUpPressed}
        type="secondary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 25,
    width: 140,
    marginLeft: "32%",
    height: 140,
    alignItems: 'center',
  },
  textFormat:{
    marginTop: 5,
    color: "white",
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 0.1,
    padding: 10,
    width: "60%",
    marginLeft: "20%",
    fontSize: 13,
  },
  appBackground: {
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
});

export default LoginScreen;
