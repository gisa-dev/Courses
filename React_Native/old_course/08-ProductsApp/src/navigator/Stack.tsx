import { createStackNavigator } from '@react-navigation/stack';
import { useAuthContext } from '../context/auth/useAuthContext';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProtectedScreen from '../screens/ProtectedScreen';
import LoadingScreen from '../screens/LoadingScreen';
import { ProductsStack } from './ProductsStack';

const Stack = createStackNavigator();

export const MyStack = () => {
	const { status } = useAuthContext();

	if (status === 'checking') {
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
			{status === 'authenticated' ? (
				<Stack.Group>
					<Stack.Screen name='ProductsStack' component={ProductsStack} />
					<Stack.Screen name='Protected' component={ProtectedScreen} />
				</Stack.Group>
			) : (
				<Stack.Group>
					<Stack.Screen name='Login' component={LoginScreen} />
					<Stack.Screen name='Register' component={RegisterScreen} />
				</Stack.Group>
			)}
		</Stack.Navigator>
	);
};
