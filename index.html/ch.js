import React, { useState } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

const ChotuAssistant = () => {
  const [animation] = useState(new Animated.Value(1)); // Initial scale

  const animateAvatar = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1.2,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
      <Animated.View
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'skyblue',
          borderRadius: 75,
          transform: [{ scale: animation }],
        }}
      />
      <Text onPress={animateAvatar}>Say "Chotu" to Wake Me Up!</Text>
    </View>
  );
};


