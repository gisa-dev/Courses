import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {PrimaryButton} from '../components';
import {Button} from 'react-native-paper';

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
      {/* <PrimaryButton
        label="Incrementar"
        onPress={() => increseBy(1)}
        onLongPress={reset}
      /> */}
      <Button mode="contained" onPress={() => increseBy(1)} onLongPress={reset}>
        Incrementar
      </Button>
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
});
