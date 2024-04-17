import {View, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../../../config/theme/theme';
import {useThemeContext} from '../../hooks/useThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  margin?: boolean;
}

export const CustomView = ({style, children, margin = false}: Props) => {
  const {colors} = useThemeContext();
  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin && globalStyles.globalMargin,
        style,
        {
          backgroundColor: colors.background,
        },
      ]}>
      {children}
    </View>
  );
};
