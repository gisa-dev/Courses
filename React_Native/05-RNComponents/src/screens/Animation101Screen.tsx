import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useThemeContext } from '../context/theme/useThemeContext';

const Animation101Screen = () => {
	const {
		theme: { colors },
	} = useThemeContext();
	const { opacity, position, fadeIn, fadeOut, movingPosition } = useAnimation();

	return (
		<View style={styles.container}>
			<Animated.View
				style={{
					...styles.purpleBox,
					backgroundColor: colors.primary,
					opacity: opacity,
					transform: [
						{
							translateY: position,
						},
					],
				}}
			/>

			<View style={{ marginTop: 10, gap: 5 }}>
				<Button
					title='FADEIN'
					onPress={() => {
						fadeIn();
						movingPosition(-100, 0);
					}}
				/>
				<Button
					title='FADEOUT'
					onPress={() => {
						fadeOut();
						movingPosition(0, -100);
					}}
				/>
			</View>
		</View>
	);
};

export default Animation101Screen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	purpleBox: {
		width: 150,
		height: 150,
		borderRadius: 20,
	},
});
