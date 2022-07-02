import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PageOneScreen from '../screens/PageOneScreen';
import PageThreeScreen from '../screens/PageThreeScreen';
import PageTwoScreen from '../screens/PageTwoScreen';
import PersonScreen from '../screens/PersonScreen';


export type RootStackParam = {
	PageOne: undefined;
	PageTwo: undefined;
	PageThree: undefined;
	Person: {
		id: number;
		name: string;
	};
}

const Stack = createStackNavigator<RootStackParam>();

const StackNavigator = () => {
	return (
		<Stack.Navigator
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
				name="PageOne"
				options={{title: 'Page 1'}}
				component={PageOneScreen}
			/>
			<Stack.Screen
				name="PageTwo"
				options={{title: 'Page 2'}}
				component={PageTwoScreen}
			/>
			<Stack.Screen
				name="PageThree"
				options={{title: 'Page 3'}}
				component={PageThreeScreen}
			/>
			<Stack.Screen
				name="Person"
				options={{title: 'Person'}}
				component={PersonScreen}
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
