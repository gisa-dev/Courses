import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStack } from './src/navigator/NativeStack';

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style='auto' />
			<NativeStack />
		</NavigationContainer>
	);
}
