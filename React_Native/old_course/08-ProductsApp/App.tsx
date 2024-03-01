import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { MyStack } from './src/navigator/Stack';
import { AuthProvider } from './src/context/auth/AuthContext';
import { ProductsProvider } from './src/context/products/ProductsContext';

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

interface AppStateProps {
	children: JSX.Element | JSX.Element[];
}

const AppState = ({ children }: AppStateProps) => {
	return (
		<AuthProvider>
			<ProductsProvider>{children}</ProductsProvider>
		</AuthProvider>
	);
};
