import {Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, globalStyles} from '../../../config/theme/theme';

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor?: string;
}

export const SubTitle = ({
  text,
  safe = false,
  backgroundColor = colors.background,
}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        backgroundColor: backgroundColor,
      }}>
      {text}
    </Text>
  );
};
