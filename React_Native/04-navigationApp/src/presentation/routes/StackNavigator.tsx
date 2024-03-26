import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  ProductScreen,
  ProductsScreen,
  SettingsScreen,
} from '../screens';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Product: {id: number; name: string};
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
