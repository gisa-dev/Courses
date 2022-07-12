import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import StackNavigator from './src/navigation/StackNavigator';
// import { BasicSideMenu } from './src/navigation/BasicSideMenu';
import { SideMenu } from './src/navigation/SideMenu';

const App = () => {
	return (
		<NavigationContainer>
			{/* <StackNavigator /> */}
			{/* <BasicSideMenu/> */}
			<SideMenu/>
		</NavigationContainer>
	);
};

export default App;
