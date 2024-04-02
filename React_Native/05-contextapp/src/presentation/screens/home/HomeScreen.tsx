import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../config/appTheme';
import {useProfileStore} from '../../store/profileStore';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);

  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.title}>{name}</Text>
        <Text style={globalStyles.title}>{email}</Text>
    </View>
  );
};
