import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import SectionListScreen from '../screens/SectionListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';

const Stack = createNativeStackNavigator();

export const NativeStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				animation: 'slide_from_right',
				animationDuration: 500,
				headerShown: false,
			}}
		>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Animation101' component={Animation101Screen} />
			<Stack.Screen name='Animation102' component={Animation102Screen} />
			<Stack.Screen name='Switch' component={SwitchScreen} />
			<Stack.Screen name='Alert' component={AlertScreen} />
			<Stack.Screen name='TextInput' component={TextInputScreen} />
			<Stack.Screen name='PullToRefresh' component={PullToRefreshScreen} />
			<Stack.Screen name='SectionList' component={SectionListScreen} />
			<Stack.Screen name='Modal' component={ModalScreen} />
			<Stack.Screen name='InfiniteScroll' component={InfiniteScrollScreen} />
		</Stack.Navigator>
	);
};
