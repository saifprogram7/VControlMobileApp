import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const LoadingEffect = () => {
  const videoRef = useRef(null);
  const videoUri = require('../../assets/loadingEffectVControlMobileApp.mp4');
  const navigation = useNavigation();

  const [videoSize, setVideoSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
  }, []);

  const onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setVideoSize({ width, height });
  };

  const handlePlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      // Video finished playing, navigate to the next page
      navigation.navigate('Chat Interface'); // Replace 'Char Interface' with the name of your next screen
    }
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={videoUri}
        useNativeControls={false}
        resizeMode="contain" // Use "contain" to fit the entire video without cropping
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default LoadingEffect;
