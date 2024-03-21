import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../theme/theme';

interface Props {
  label: string;
  onPress: () => void;
}

export const PrimaryButton = ({label, onPress}: Props) => {
  return (
    <Pressable style={globalStyles.primaryButton} onPress={() => onPress()}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});
