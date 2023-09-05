import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Tabs } from './src/navigator/Tabs';

const App = () => {
	return (
		<NavigationContainer>
			<StatusBar style='auto' />
			<Tabs/>
		</NavigationContainer>
	);
};

export default App;
