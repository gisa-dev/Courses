import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../config/appTheme';
import {useProfileStore} from '../../store/profileStore';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{name}</Text>
      <Text style={globalStyles.title}>{email}</Text>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({name: 'Gilberto Acosta'})}>
        <Text>Change Name</Text>
      </Pressable>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({email: 'gacosta@google.com'})}>
        <Text>Change Email</Text>
      </Pressable>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => changeProfile('John Doe', 'john.doe@google.com')}>
        <Text>Return to John</Text>
      </Pressable>
    </View>
  );
};
