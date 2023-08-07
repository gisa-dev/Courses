import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
	createDrawerNavigator,
} from '@react-navigation/drawer';

import {
	useWindowDimensions,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';
import { SettingsScreen } from '../screens';
import { styles } from '../theme/appTheme';
import StackNavigator from './StackNavigator';
import { Tabs } from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	const { width } = useWindowDimensions();
	return (
		<Drawer.Navigator
			drawerContent={(props) => <InternalMenu {...props} />}
			screenOptions={{
				headerShown: false,
				drawerType: width >= 600 ? 'permanent' : 'front',
			}}
		>
			<Drawer.Screen name='Tabs' component={Tabs} />
			<Drawer.Screen name='Settings' component={SettingsScreen} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;

const InternalMenu = ({ navigation }: DrawerContentComponentProps) => {
	return (
		<DrawerContentScrollView>
			{/* avatar */}
			<View style={styles.avatarContainer}>
				<Image
					source={{
						uri: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
					}}
					style={styles.avatar}
				/>
			</View>

			{/* options */}
			<View style={styles.menuContainer}>
				<TouchableOpacity
					style={styles.menuButton}
					onPress={() => {
						navigation.navigate('Tabs');
					}}
				>
					<Text style={styles.menuText}>Navigation</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.menuButton}
					onPress={() => {
						navigation.navigate('Settings');
					}}
				>
					<Text style={styles.menuText}>Settings</Text>
				</TouchableOpacity>
			</View>
		</DrawerContentScrollView>
	);
};
