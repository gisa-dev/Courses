import {View, Text, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {globalStyles} from '../../../config/appTheme';
import {useCounterStore} from '../../store/counterStore';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigator = useNavigation();

  const count = useCounterStore(state => state.count);
  const increaseBy = useCounterStore(state => state.increaseBy);

  useEffect(() => {
    navigator.setOptions({
      headerTitle: `Count: ${count}`,
    });
  }, [count]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Count: {count}</Text>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => increaseBy(1)}>
        <Text>+1</Text>
      </Pressable>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => increaseBy(-1)}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
