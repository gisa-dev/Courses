import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';
import {colors} from '../../../config/theme/theme';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: Props) => {
  return (
    <View style={{backgroundColor: colors.cardBackground}}>
      <View
        style={[
          {
            backgroundColor: colors.text,
            alignSelf: 'center',
            width: '90%',
            height: 1,
            opacity: 0.2,
            marginVertical: 8,
          },
          style,
        ]}
      />
    </View>
  );
};
