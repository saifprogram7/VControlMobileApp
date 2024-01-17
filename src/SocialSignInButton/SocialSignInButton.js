import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const SocialSignInButton = () => {
  const onSignInFacebookPressed = () => {
    console.log("onSignInFacebookPressed");
  };
    
  const onSignInGooglePressed = () => {
    console.log("onSignInGooglePressed");
  };
    
  const onSignInApplePressed = () => {
    console.log("onSignInApplePressed");
  };
  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebookPressed}
        bgColor="rgba(231,234,244, 0.95)"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google "
        onPress={onSignInGooglePressed}
        bgColor="rgba(250,233,234, 0.95)"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApplePressed}
        bgColor="rgba(227,227,227, 0.95)"
        fgColor="#363636"
      />
    </>
  )
}

export default SocialSignInButton