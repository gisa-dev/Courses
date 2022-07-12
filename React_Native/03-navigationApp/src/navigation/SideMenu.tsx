import React from 'react';
import {
	createDrawerNavigator,
	DrawerContentComponentProps,
	DrawerContentScrollView,
} from '@react-navigation/drawer';
import SettingScreen from '../screens/SettingScreen';
import StackNavigator from './StackNavigator';
import {
	Image,
	Text,
	TouchableOpacity,
	useWindowDimensions,
	View,
} from 'react-native';
import {styles} from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
	const {width} = useWindowDimensions();

	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false,
				drawerType: width >= 768 ? 'permanent' : 'front',
			}}
			drawerContent={(props) => <InternalMenu {...props} />}
		>
			<Drawer.Screen name="StackNavigator" component={StackNavigator} />
			<Drawer.Screen name="SettingScreen" component={SettingScreen} />
		</Drawer.Navigator>
	);
};

const InternalMenu = ({navigation}: DrawerContentComponentProps) => {
	return (
		<DrawerContentScrollView>
			{/* avatar */}
			<View style={styles.avatarContainer}>
				<Image
					source={{
						uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclinicforspecialchildren.org%2Fwp-content%2Fuploads%2F2016%2F08%2Favatar-placeholder.gif&f=1&nofb=1',
					}}
					style={styles.avatar}
				/>
			</View>

			{/* menu option */}
			<View style={styles.menuContainer}>
				<TouchableOpacity
					style={styles.buttonMenu}
					onPress={() => {
						navigation.navigate('StackNavigator');
					}}
				>
					<Text style={styles.textMenu}>Navigation</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.buttonMenu}
					onPress={() => {
						navigation.navigate('SettingScreen');
					}}
				>
					<Text style={styles.textMenu}>Setting</Text>
				</TouchableOpacity>
			</View>
		</DrawerContentScrollView>
	);
};
