import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';
import React, {useState} from 'react';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  const increseBy = (value: number) => {
    setCounter(counter + value);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>
      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        onPress={() => increseBy(1)}
        onLongPress={reset}>
        <Text style={styles.buttonText}>Increment</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },

  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : '',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: Platform.OS === 'android' ? 'white' : '#4746AB',
    fontWeight: 'bold',
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : '',
  },
});
