import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";


const ConfirmationEmail = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const [userName, setUserName] = useState('');
  
  const onConfirmPressed = () => {
    navigation.navigate('Account Registered');
  };
  const onSignInPressed = () => {
    navigation.navigate('Login');
  };

  const onResendPressed = () => {
    console.log("onResendPressed");
  };

  return (
    <View style={styles.appBackground}>
      <Text style={styles.title}>Confirm Sign Up</Text>
      <CustomInput
        value={userName}
        setValue={setUserName}
        placeholder="Enter your username"
      />
      <CustomInput
        value={code}
        setValue={setCode}
        placeholder="Enter your confirmation code from email"
      />
      <CustomButton text="Confirm" onPress={onConfirmPressed} />
      <CustomButton
        text="Resend Code"
        onPress={onResendPressed}
        type="secondary"
      />
      <CustomButton
        text="Back to Sign In"
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
    marginTop: 50,
    textAlign: 'center',
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

export default ConfirmationEmail;
