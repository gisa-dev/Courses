import React from 'react';
import {Button, CustomView, Title} from '../../components';
import {Text, View} from 'react-native';
import {useThemeContext} from '../../hooks/useThemeContext';

export const ChangeThemeScreen = () => {
  const {colors, currentTheme, setTheme} = useThemeContext();
  return (
    <CustomView margin>
      <Title text={`Change Theme: ${currentTheme}`} safe />
      <Button text="Light" onPress={() => setTheme('light')} />
      <View style={{height: 10}} />
      <Button text="Dark" onPress={() => setTheme('dark')} />
      <View style={{height: 10}} />
      <Text style={{color: colors.text}}>
        {JSON.stringify(colors, null, 3)}
      </Text>
    </CustomView>
  );
};
