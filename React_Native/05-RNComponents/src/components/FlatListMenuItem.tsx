import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MenuItem } from '../interfaces/appInterfaces';
import { useNavigation } from '@react-navigation/native';

interface Props {
	menuItem: MenuItem;
}

const FlatListMenuItem = ({ menuItem }: Props) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={() => navigation.navigate(menuItem.component as never)}
		>
			<View style={styles.container}>
				<View style={styles.containerIconText}>
					<Ionicons name={menuItem.icon} color='gray' size={23} />
					<Text style={styles.itemText}>{menuItem.name}</Text>
				</View>
				<Ionicons name='chevron-forward-outline' color='gray' size={23} />
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
