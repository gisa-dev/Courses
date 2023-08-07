import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigator/DrawerNavigator';

// import StackNavigator from './src/navigator/StackNavigator';
// import DrawerNavigatorBasic from './src/navigator/DrawerNavigatorBasic';

const App = () => {
	return (
		<NavigationContainer>
			{/* <StackNavigator /> */}
			{/* <DrawerNavigatorBasic /> */}
			<DrawerNavigator />
		</NavigationContainer>
	);
};

export default App;
