import { StyleSheet, View, Animated, Button } from 'react-native';
import React from 'react';
import { useFade } from '../hooks/useFade';

const FadeScreen = () => {
	const { opacity, fadeIn, fadeOut } = useFade();

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: 'gray',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Animated.View
				style={{
					backgroundColor: '#084F6A',
					width: 150,
					height: 150,
					borderColor: 'white',
					borderWidth: 10,
					borderRadius: 10,
					opacity: opacity,
				}}
			/>

			<View style={{ marginTop: 20 }}>
				<Button title='fadeIn' onPress={fadeIn} />
			</View>
			<View style={{ marginTop: 20 }}>
				<Button title='fadeOut' onPress={fadeOut} />
			</View>
		</View>
	);
};

export default FadeScreen;

const styles = StyleSheet.create({});
