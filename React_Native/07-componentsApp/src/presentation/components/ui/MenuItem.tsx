import {Text, Pressable, View, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigator/StackNavigator';
import {Separator} from './Separator';
import {useThemeContext} from '../../hooks/useThemeContext';

interface Props {
  name: string;
  icon: string;
  component: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export const MenuItem = ({
  name,
  icon,
  component,
  isFirst = false,
  isLast = false,
}: Props) => {
  const navigator = useNavigation<NavigationProp<RootStackParams>>();

  const {colors} = useThemeContext();
  return (
    <>
      <Pressable onPress={() => navigator.navigate(component)}>
        <View
          style={{
            ...styles.container,
            backgroundColor: colors.cardBackground,
            ...(isFirst && {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
            }),
            ...(isLast && {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingBottom: 10,
            }),
          }}>
          <Icon
            name={icon}
            size={25}
            style={{marginRight: 10}}
            color={colors.primary}
          />
          <Text style={{color: colors.text}}>{name}</Text>
          <Icon
            name="chevron-forward-outline"
            size={25}
            style={{marginLeft: 'auto'}}
            color={colors.primary}
          />
        </View>
      </Pressable>

      {!isLast && <Separator />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
