import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ForgottenPassword = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  
  const onSendPressed = () => {
    navigation.navigate('Reset Password');
  };
  const onSignInPressed = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.appBackground}>
      <Text style={styles.title}>Forgot Password</Text>
      <CustomInput
        value={userName}
        setValue={setUserName}
        placeholder="Enter your username"
      />
      <CustomInput
        value={email}
        setValue={setEmail}
        placeholder="Enter email for verification code"
      />
      <CustomButton text="Send" onPress={onSendPressed} />
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
    marginTop: 40,
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

export default ForgottenPassword;
