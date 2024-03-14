import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  box1: {
    flex: 1,
    backgroundColor: '#5654d1',
  },
  box2: {
    flex: 2,
    backgroundColor: '#3f21a0',
  },
  box3: {
    flex: 3,
    backgroundColor: '#251155',
  },
});
