import {StyleProp, Image, ImageStyle} from 'react-native';
import React from 'react';
import {useThemeContext} from '../../hooks/useThemeContext';

interface Props {
  style?: StyleProp<ImageStyle>;
}

export const PokeBallBg = ({style}: Props) => {
  const {isDark} = useThemeContext();

  const pokeballImg = isDark
    ? require('../../../assets/pokeball-light.png')
    : require('../../../assets/pokeball-dark.png');

  return (
    <Image
      source={pokeballImg}
      style={[
        {
          width: 300,
          height: 300,
          opacity: 0.3,
        },
        style,
      ]}
    />
  );
};
