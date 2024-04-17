import {View, StyleProp, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {useThemeContext} from '../../hooks/useThemeContext';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card = ({style, children}: Props) => {
  const {colors} = useThemeContext();
  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          borderRadius: 10,
          padding: 10,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
