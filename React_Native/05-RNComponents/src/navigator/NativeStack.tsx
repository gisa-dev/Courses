import {
	NativeStackNavigationProp,
	createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';
import SwitchScreen from '../screens/SwitchScreen';

const Stack = createNativeStackNavigator();

export const NativeStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				animation: 'fade_from_bottom',
				animationDuration: 500,
				headerShown: false,
			}}
		>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Animation101' component={Animation101Screen} />
			<Stack.Screen name='Animation102' component={Animation102Screen} />
			<Stack.Screen name='Switch' component={SwitchScreen} />
		</Stack.Navigator>
	);
};
