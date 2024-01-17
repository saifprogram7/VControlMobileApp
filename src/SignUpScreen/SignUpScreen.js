import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPressed = () => {
    navigation.navigate('Confirm Email');
  };
  const onSignInPressed = () => {
    navigation.navigate('Login');
  };
  const onSignUpFacebookPressed = () => {
    console.log("onSignInFacebookPressed");
  };
    
  const onSignUpGooglePressed = () => {
    console.log("onSignInGooglePressed");
  };
    
  const onSignUpApplePressed = () => {
    console.log("onSignInApplePressed");
  };

  return (
    <View style={styles.appBackground}>
      <Text style={styles.title}>Create an account</Text>
      <CustomInput
        value={username}
        setValue={setUsername}
        placeholder="Username"
      />
      <CustomInput
        value={email}
        setValue={setEmail}
        placeholder="Email"
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <CustomInput
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      <CustomButton text="Register" onPress={onRegisterPressed} />
      <Text style={styles.text}>By registering, you confirm that you accept our Terms of Use and 
        Privacy Policy
      </Text>
      <CustomButton
        text="Sign Up with Facebook"
        onPress={onSignUpFacebookPressed}
        bgColor="rgba(231,234,244, 0.95)"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign Up with Google "
        onPress={onSignUpGooglePressed}
        bgColor="rgba(250,233,234, 0.95)"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign Up with Apple"
        onPress={onSignUpApplePressed}
        bgColor="rgba(227,227,227, 0.95)"
        fgColor="#363636"
      />
      <CustomButton
        text="Have an account? Sign in"
        onPress={onSignInPressed}
        type="secondary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 65,
    marginLeft: "22.5%",
    marginBottom: 20,
  },
  text: {
    color: "grey",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 9,
    fontSize: 12,
    textAlign: 'center',
    width: 355,
  },  
  appBackground: {
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
});

export default SignUpScreen;
