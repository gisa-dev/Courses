import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import StackNavigator from './src/navigation/StackNavigator';
import { BasicSideMenu } from './src/navigation/BasicSideMenu';

const App = () => {
	return (
		<NavigationContainer>
			{/* <StackNavigator /> */}
			<BasicSideMenu/>
		</NavigationContainer>
	);
};

export default App;
