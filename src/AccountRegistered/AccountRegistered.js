import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../CustomButton/CustomButton';

const AccountRegistered = () => {
  const navigation = useNavigation();

  const onButtonPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Congratulations your account is now registered click the button below to proceed</Text>
      <CustomButton type="accountRegistered" text="Login" onPress={onButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Set the background color to black
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center', 
    color: 'white', // Set text color to white
  },
});

export default AccountRegistered;
