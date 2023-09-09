import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
} from 'react-native';

interface Props {
	title: string;
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
}

const BlackButton = ({ title, onPress, style = {} }: Props) => {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={onPress}
			style={{ ...styles.blackButton, ...(style as any) }}
		>
			<Text style={styles.blackButtonText}>{title}</Text>
		</TouchableOpacity>
	);
};

export default BlackButton;

const styles = StyleSheet.create({
	blackButton: {
		marginTop: 10,
		height: 50,
		width: 200,
		backgroundColor: '#252525',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		elevation: 6,
	},
	blackButtonText: {
		color: 'white',
		fontSize: 15,
	},
});
