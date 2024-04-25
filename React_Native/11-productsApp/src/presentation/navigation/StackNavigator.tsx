import {
	createStackNavigator,
	StackCardStyleInterpolator
} from '@react-navigation/stack'
import {
	HomeScreen,
	LoginScreen,
	LoadingScreen,
	ProductScreen,
	RegisterScreen
} from '../screens'

export type RootStackParams = {
	HomeScreen: undefined
	LoginScreen: undefined
	RegisterScreen: undefined
	LoadingScreen: undefined
	ProductScreen: { productId: string }
}

const Stack = createStackNavigator<RootStackParams>()

const fadeAnimation: StackCardStyleInterpolator = ({ current }) => {
	return {
		cardStyle: {
			opacity: current.progress
		}
	}
}

export const StackNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName='LoadingScreen'
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen
				name='HomeScreen'
				component={HomeScreen}
				options={{
					cardStyleInterpolator: fadeAnimation
				}}
			/>
			<Stack.Screen
				name='LoginScreen'
				component={LoginScreen}
				options={{
					cardStyleInterpolator: fadeAnimation
				}}
			/>
			<Stack.Screen
				name='RegisterScreen'
				component={RegisterScreen}
				options={{
					cardStyleInterpolator: fadeAnimation
				}}
			/>
			<Stack.Screen
				name='LoadingScreen'
				component={LoadingScreen}
				options={{
					cardStyleInterpolator: fadeAnimation
				}}
			/>
			<Stack.Screen
				name='ProductScreen'
				component={ProductScreen}
				options={{
					cardStyleInterpolator: fadeAnimation
				}}
			/>
		</Stack.Navigator>
	)
}
