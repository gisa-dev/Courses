import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SettingScreen from '../screens/SettingScreen';
import StackNavigator from './StackNavigator';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const BasicSideMenu = () => {
	const {width} = useWindowDimensions();

	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false,
				drawerType: width >= 768 ? 'permanent' : 'front',
			}}
		>
			<Drawer.Screen
				name="StackNavigator"
				options={{title: 'Home'}}
				component={StackNavigator}
			/>
			<Drawer.Screen
				name="SettingScreen"
				options={{title: 'Setting'}}
				component={SettingScreen}
			/>
		</Drawer.Navigator>
	);
};
