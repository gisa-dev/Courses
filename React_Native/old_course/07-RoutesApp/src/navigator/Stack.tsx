import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';
import PermissionsScreen from '../screens/PermissionsScreen';
import { usePermissionsContext } from '../context/permissions/usePermissionsContext';
import { PermissionStatus } from 'expo-location';
import LoadingScreen from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export const MyStack = () => {
	const { permissions } = usePermissionsContext();

	if (permissions.locationStatus === PermissionStatus.UNDETERMINED) {
		return <LoadingScreen />;
	}

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: 'white',
				},
			}}
		>
			{permissions.locationStatus === 'granted' ? (
				<Stack.Screen name='Map' component={MapScreen} />
			) : (
				<Stack.Screen name='Permissions' component={PermissionsScreen} />
			)}
		</Stack.Navigator>
	);
};
