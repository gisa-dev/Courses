import { StyleSheet, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
	children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: Props) => {
	return (
		<View style={{ flex: 1 }}>
			<LinearGradient
				colors={['#084F6A', '#75CEDB', '#FFFF']}
				start={{ x: 0.1, y: 0.1 }}
				end={{ x: 0.5, y: 0.5 }}
				style={{ ...StyleSheet.absoluteFillObject }}
			/>

			{children}
		</View>
	);
};

export default GradientBackground;
