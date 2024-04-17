import {Text, StyleProp, ViewStyle, Pressable} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../config/theme/theme';
import {useThemeContext} from '../../hooks/useThemeContext';

interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const Button = ({onPress, text, style}: Props) => {
  const {colors} = useThemeContext();
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
        style,
      ]}>
      <Text
        style={[
          globalStyles.btnPrimaryText,
          {
            color: colors.buttonTextColor,
          },
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};
