import { Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, text, type = "primary", bgColor, fgColor}) => {
  const styles = StyleSheet.create({
    container: {
      width: "65%",
      backgroundColor: 0.2,
      height: 40,
      marginTop: 9.5,
      marginLeft: "17.5%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
    container_primary:{
      backgroundColor: "rgba(50, 205, 50, 50)",
    },
    container_secondary: {
        backgroundColor: "transparent",
        borderColor: "rgba(50, 205, 50, 50)",
        width: "65%",
        marginLeft: "17.5%",
    },
    container_tertiary:{
      backgroundColor: "transparent",
      borderColor: "rgba(50, 205, 50, 50)",
      width: "65%",
      marginLeft: "17.5%",
    },
    container_accountRegistered: {
      width: '55%',
      height: 40,
      backgroundColor: 'rgba(50, 205, 50, 50)',
      borderRadius: 5,
      marginRight: 65,
    },
    text: {
      textAlign: 'center',
      fontWeight: "bold"
    },
    text_tertiary:{
      color: "white",
      fontSize: 13,
    },
    text_secondary: {
        color: "white",
        fontSize: 12,
        fontWeight: 'bold',
    },
    text_accountRegistered: {
      color: "black", // Customize text color for AccountRegistered type
      fontSize: 16, // Customize font size for AccountRegistered type
      fontWeight: 'bold',
    },
  });

  return (
    <Pressable style={[styles.container, styles[`container_${type}`], bgColor ? {backgroundColor: bgColor} : {}]} onPress={onPress}>
      <Text style={[styles.text, styles[`text_${type}`], fgColor ? {color: fgColor} : {}]}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;
