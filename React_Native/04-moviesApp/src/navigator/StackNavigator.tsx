import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen, HomeScreen } from '../screens';
import { Movie } from '../interfaces/movieInterface';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParams = {
	Home: undefined;
	Detail: Movie;
};

// const Stack = createStackNavigator<RootStackParams>();
const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ animation: 'slide_from_bottom' }}>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen
				name='Detail'
				component={DetailScreen}
				options={{ animation: 'slide_from_left' }}
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
