import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface Props {
	text: string;
	color?: string;
	width?: boolean;
	action: (textNumber : string) => void;
}

const ButtonCalc = ({text, color = '#2D2D2D', width = false, action}: Props) => {
	const colorText = color === '#9B9B9B' ? 'black' : 'white';

	return (
		<TouchableOpacity activeOpacity={0.5} onPress={() => action(text)}>
			<View
				style={{
					...styles.button,
					backgroundColor: color,
					width: width ? 165 : 80,
				}}
			>
				<Text style={{...styles.textButton, color: colorText}}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ButtonCalc;

const styles = StyleSheet.create({
	button: {
		height: 80,
		width: 80,
		backgroundColor: '#2D2D2D',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 5,
	},
	textButton: {
		padding: 10,
		fontSize: 30,
		color: '#FFF',
		fontWeight: '300',
	},
});
