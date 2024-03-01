import {
	StyleProp,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
	iconName: keyof typeof Ionicons.glyphMap;
	onPress: () => void;
	style: StyleProp<ViewStyle>;
}

const Fab = ({ iconName, onPress, style = {} }: Props) => {
	return (
		<View style={{ zIndex: 10, ...(style as any) }}>
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={onPress}
				style={styles.blackButton}
			>
				<Ionicons name={iconName} size={35} color='white' />
			</TouchableOpacity>
		</View>
	);
};

export default Fab;

const styles = StyleSheet.create({
	blackButton: {
		height: 60,
		width: 60,
		backgroundColor: '#252525',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6,
	},
});
