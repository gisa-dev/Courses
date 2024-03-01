import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MyStack } from './src/navigator/Stack';
import { PermissionsProvider } from './src/context/permissions/PermissionsContext';
const App = () => {
	return (
		<NavigationContainer>
			<AppState>
				<StatusBar style='auto' />
				<MyStack />
			</AppState>
		</NavigationContainer>
	);
};

export default App;

const AppState = ({ children }: any) => {
	return <PermissionsProvider>{children}</PermissionsProvider>;
};
