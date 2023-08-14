import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen, HomeScreen } from '../screens';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
	Home: undefined;
	Detail: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: 'white',
				},
			}}
		>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Detail' component={DetailScreen} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
