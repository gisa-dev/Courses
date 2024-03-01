import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MyStack } from './Stack';
import { Tab2Screen } from './Tab2';
const Tab = createBottomTabNavigator();

export const Tabs = () => {
	return (
		<Tab.Navigator
			sceneContainerStyle={{
				backgroundColor: 'white',
			}}
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: '#5856D6',
				tabBarLabelStyle: {
					marginBottom: Platform.OS === 'ios' ? 0 : 10,
				},
				tabBarStyle: {
					position: 'absolute',
					backgroundColor: 'rgba(255,255,255,0.92)',
					borderWidth: 0,
					elevation: 0,
					height: Platform.OS === 'ios' ? 80 : 60,
				},
			}}
		>
			<Tab.Screen
				name='Stack'
				component={MyStack}
				options={{
					tabBarLabel: 'Lists',
					tabBarIcon: ({ color }) => (
						<Ionicons color={color} size={25} name='list-outline' />
					),
				}}
			/>
			<Tab.Screen
				name='Search'
				component={Tab2Screen}
				options={{
					tabBarLabel: 'Search',
					tabBarIcon: ({ color }) => (
						<Ionicons color={color} size={25} name='search-outline' />
					),
				}}
			/>
		</Tab.Navigator>
	);
};
