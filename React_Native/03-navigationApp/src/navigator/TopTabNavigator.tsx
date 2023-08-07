import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumsScreen, ChatScreen, ContactScreen } from '../screens';

import { LogBox, Text } from 'react-native';
import { colors } from '../theme/appTheme';
import Ionicons from '@expo/vector-icons/Ionicons';

LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
	return (
		<Tab.Navigator
		
			sceneContainerStyle={{
				backgroundColor: 'white',
			}}
			screenOptions={({ route }) => ({
				tabBarPressColor: colors.primary,
				tabBarIndicatorStyle: {
					backgroundColor: colors.primary,
				},
				tabBarStyle: {
					shadowColor: 'transparent',
					elevation: 0,
				},
				tabBarShowIcon: true,
				tabBarIcon: ({ color, focused }) => {
					let iconName: string = '';

						switch (route.name) {
							case 'Tab1':
								iconName = 'bandage-outline';
								break;
							case 'TopTapNavigator':
								iconName = 'basketball-outline';
								break;
							case 'StackNavigator':
								iconName = 'bookmarks-outline';
								break;
						}

						return <Ionicons name={iconName} size={20} color={color} />;
				},
			})}
		>
			<Tab.Screen name='Chat' component={ChatScreen} />
			<Tab.Screen name='Contact' component={ContactScreen} />
			<Tab.Screen name='Albums' component={AlbumsScreen} />
		</Tab.Navigator>
	);
};
