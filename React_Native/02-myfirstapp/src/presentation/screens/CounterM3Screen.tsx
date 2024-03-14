import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../theme/global.styles';
import {FAB} from 'react-native-paper';

export const CounterM3Screen = () => {
  const [counter, setCounter] = useState(10);

  const increseBy = (value: number) => {
    setCounter(counter + value);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <View style={globalStyles.centerConteiner}>
      <Text style={globalStyles.title}>{counter}</Text>

      {/* <Icon name="accessibility-outline" size={25} /> */}
      <FAB
        icon="add"
        onPress={() => increseBy(1)}
        onLongPress={reset}
        style={globalStyles.fab}
      />
    </View>
  );
};
