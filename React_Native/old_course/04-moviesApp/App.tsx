import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackNavigator from './src/navigator/StackNavigator';
import FadeScreen from './src/screens/FadeScreen';
import { StatusBar } from 'expo-status-bar';

const App = () => {
	return (
		<NavigationContainer>
			<StatusBar hideTransitionAnimation='fade' />
			<StackNavigator />
			{/* <FadeScreen/> */}
		</NavigationContainer>
	);
};

export default App;
