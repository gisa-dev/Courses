import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useThemeContext } from '../context/theme/useThemeContext';
import {
	AlertScreen,
	Animation101Screen,
	Animation102Screen,
	ChangeThemeScreen,
	HomeScreen,
	InfiniteScrollScreen,
	ModalScreen,
	PullToRefreshScreen,
	SectionListScreen,
	SlidesScreen,
	SwitchScreen,
	TextInputScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

export const NativeStack = () => {
	const { theme } = useThemeContext();

	return (
		<NavigationContainer theme={theme}>
			<StatusBar style={theme.currentTheme === 'light' ? 'dark' : 'light'} />
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
				<Stack.Screen name='Slides' component={SlidesScreen} />
				<Stack.Screen name='Theme' component={ChangeThemeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
