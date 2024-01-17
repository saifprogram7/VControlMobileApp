import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

const ResetPassword = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const onSignInPressed = () => {
    navigation.navigate('Login');
  };

  const onSubmitPressed = () => {
    navigation.navigate('Reset Password Confirmation');
  };

  return (
    <View style={styles.appBackground}>
      <Text style={styles.title}>Reset your password</Text>
      <CustomInput
        value={code}
        setValue={setCode}
        placeholder="Enter Verification Code"
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder="Enter your new password"
      />
      <CustomInput
        value={confirmPassword}
        setValue={setConfirmPassword}
        placeholder="Confirm new password"
      />
      <CustomButton text="Submit" onPress={onSubmitPressed} />
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
    marginLeft: "18.5%",
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

export default ResetPassword;
