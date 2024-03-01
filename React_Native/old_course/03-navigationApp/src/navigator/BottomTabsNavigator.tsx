import React from 'react';

import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen, Tab2Screen, Tab3Screen } from '../screens';
import StackNavigator from './StackNavigator';
import { colors } from '../theme/appTheme';
import { TopTapNavigator } from './TopTabNavigator';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Tabs = () => {
	return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabsIOS = createBottomTabNavigator();

export const TabsIOS = () => {
	return (
		<BottomTabsIOS.Navigator
			sceneContainerStyle={{
				backgroundColor: 'white',
			}}
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: colors.primary,
				tabBarStyle: {
					borderTopColor: colors.primary,
					borderTopWidth: 0,
					elevation: 0,
				},
				tabBarLabelStyle: {
					fontSize: 15,
				},
				tabBarIcon: ({ color, focused, size }) => {
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

					return (
						<Ionicons
							name={iconName}
							size={20}
							color={color}
						/>
					);
				},
			})}
		>
			<BottomTabsIOS.Screen name='Tab1' component={Tab1Screen} />
			<BottomTabsIOS.Screen
				name='TopTapNavigator'
				component={TopTapNavigator}
			/>
			<BottomTabsIOS.Screen name='StackNavigator' component={StackNavigator} />
		</BottomTabsIOS.Navigator>
	);
};

const MaterialTabsAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
	return (
		<MaterialTabsAndroid.Navigator
			sceneAnimationEnabled={true}
			barStyle={{ backgroundColor: colors.primary }}
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: colors.primary,
				tabBarStyle: {
					borderTopColor: colors.primary,
					borderTopWidth: 0,
					elevation: 0,
				},
				tabBarLabelStyle: {
					fontSize: 15,
				},
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
			<MaterialTabsAndroid.Screen name='Tab1' component={Tab1Screen} />
			<MaterialTabsAndroid.Screen
				name='TopTapNavigator'
				component={TopTapNavigator}
			/>
			<MaterialTabsAndroid.Screen
				name='StackNavigator'
				component={StackNavigator}
			/>
		</MaterialTabsAndroid.Navigator>
	);
};
