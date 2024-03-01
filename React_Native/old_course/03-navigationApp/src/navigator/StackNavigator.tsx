import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	Page1Screen,
	Page2Screen,
	Page3Screen,
	PersonScreen,
} from '../screens';

export type RootStackParams = {
	Page1: undefined;
	Page2: undefined;
	Page3: undefined;
	Person: {
		id: number;
		name: string;
	};
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
	return (
		<Stack.Navigator
			// initialRouteName='Page1'

			screenOptions={{
				headerStyle: {
					elevation: 0,
					shadowColor: 'transparent',
				},
				cardStyle: {
					backgroundColor: 'white',
				},
				
			}}
		>
			<Stack.Screen
				name='Page1'
				component={Page1Screen}
				options={{ title: 'Page 1' }}
			/>
			<Stack.Screen
				name='Page2'
				component={Page2Screen}
				options={{ title: 'Page 2' }}
			/>
			<Stack.Screen
				name='Page3'
				component={Page3Screen}
				options={{ title: 'Page 3' }}
			/>
			<Stack.Screen
				name='Person'
				component={PersonScreen}
				options={{ title: 'Person' }}
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
