import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export function Bicicleta() {
  return (
    <View style={source.container}>
      <Image source={require('./assets/bike_image.png')} />
    </View>
  );
}

const source = StyleSheet.create({
  container: {
    padding: 15,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  
});
