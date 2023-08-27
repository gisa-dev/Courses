import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MyStack } from './src/navigator/Stack';

const App = () => {
	return (
		<NavigationContainer>
			<StatusBar style='auto' />
			<MyStack />
		</NavigationContainer>
	);
};

export default App;
