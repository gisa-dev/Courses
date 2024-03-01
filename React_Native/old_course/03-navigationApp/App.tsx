import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigator/DrawerNavigator';
import { AuthProvider } from './src/context/AuthContext';
// import BottomTabs from './src/navigator/BottomTabsNavigator';

// import StackNavigator from './src/navigator/StackNavigator';
// import DrawerNavigatorBasic from './src/navigator/DrawerNavigatorBasic';

const App = () => {
	return (
		<NavigationContainer>
			<AuthProvider>
				{/* <StackNavigator /> */}
				{/* <DrawerNavigatorBasic /> */}
				<DrawerNavigator />
				{/* <BottomTabs/> */}
			</AuthProvider>
		</NavigationContainer>
	);
};

export default App;
