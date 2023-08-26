import { View, Text, TouchableOpacity } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { darkTheme, lightTheme, styles } from '../theme/appTheme';
import { useThemeContext } from '../context/theme/useThemeContext';

const ChangeThemeScreen = () => {
	const {
		theme: { colors },
		setDarkTheme,
		setLightTheme,
	} = useThemeContext();
	return (
		<View style={styles.globalMargin}>
			<HeaderTitle title='Theme' />

			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<TouchableOpacity
					onPress={() => setLightTheme(lightTheme)}
					activeOpacity={0.8}
					style={{
						backgroundColor: colors.primary,
						justifyContent: 'center',
						alignItems: 'center',
						width: 150,
						height: 50,
						borderRadius: 20,
					}}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 22,
						}}
					>
						Light
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setDarkTheme(darkTheme)}
					activeOpacity={0.8}
					style={{
						backgroundColor: colors.primary,
						justifyContent: 'center',
						alignItems: 'center',
						width: 150,
						height: 50,
						borderRadius: 20,
					}}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 22,
						}}
					>
						Dark
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ChangeThemeScreen;
