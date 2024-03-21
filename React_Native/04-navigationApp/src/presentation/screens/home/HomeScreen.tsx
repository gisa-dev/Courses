import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label="Products"
        onPress={() => navigation.navigate('Products' as never)}
      />
      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings' as never)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
