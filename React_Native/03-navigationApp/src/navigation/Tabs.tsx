import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
// import TabThreeScreen from '../screens/TabThreeScreen';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const Tabs = () =>  {
	return (
		<Tab.Navigator
		screenOptions={{
			tabBarActiveTintColor: 'tomato',
			tabBarStyle: {
				borderTopColor: 'green'
			}
		}}
	
		>
			<Tab.Screen name="TabOne" component={TabOneScreen} />
			<Tab.Screen name="TabTwo" component={TabTwoScreen} />
			<Tab.Screen name="StackNavigator" component={StackNavigator} />
		</Tab.Navigator>
	);
}

export default Tabs;
