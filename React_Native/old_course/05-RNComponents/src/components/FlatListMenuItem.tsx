import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeContext } from '../context/theme/useThemeContext';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
	menuItem: MenuItem;
}

const FlatListMenuItem = ({ menuItem }: Props) => {
	const {
		theme: { colors },
	} = useThemeContext();
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={() => navigation.navigate(menuItem.component as never)}
		>
			<View style={styles.container}>
				<View style={styles.containerIconText}>
					<Ionicons name={menuItem.icon} color={colors.primary} size={23} />
					<Text style={{ ...styles.itemText, color: colors.text }}>
						{menuItem.name}
					</Text>
				</View>
				<Ionicons
					name='chevron-forward-outline'
					color={colors.primary}
					size={23}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	containerIconText: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
	itemText: {
		fontSize: 19,
	},
});
