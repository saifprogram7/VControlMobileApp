import { View, Text, StyleSheet , TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry}) => {
    return (
      <View style={styles.container}>
        <TextInput 
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          placeholderTextColor={"white"}
          style={styles.input}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      height: 40,
      marginTop: 3,
      marginBottom: 3,
      marginLeft: "17.5%",
      padding: 10,
      width: "65%",
      borderColor: '#32CD32',
      borderWidth: 2,
      borderRadius: 10,
    },
    input: {
      color: "white",
    }
  });
  
  export default CustomInput;
  
