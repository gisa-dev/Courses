import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import { SettingsScreen } from '../screens';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigatorBasic = () => {
	const { width } = useWindowDimensions();
	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false,
				drawerType: width >= 600 ? 'permanent' : 'front',
			}}
		>
			<Drawer.Screen name='StackNavigator' component={StackNavigator} />
			<Drawer.Screen name='Settings' component={SettingsScreen} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigatorBasic;
