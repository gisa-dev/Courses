import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
	actor: Cast;
}

const CastItem = ({ actor }: Props) => {
	const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
	return (
		<View style={styles.container}>
			{actor.profile_path && (
				<View style={styles.imageContainer}>
					<Image source={{ uri }} style={{ width: 100, height: 100 }} />
				</View>
			)}

			<View style={styles.actorInfo}>
				<Text style={{ fontSize: 18, fontWeight: 'bold' }}>{actor.name}</Text>
				<Text style={{ fontSize: 16, opacity: 0.7 }}>{actor.character}</Text>
			</View>
		</View>
	);
};

export default CastItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: 'white',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,
		elevation: 10,
		borderRadius: 10,
		gap: 5,
		marginHorizontal: 20,
	},
	imageContainer: {
		borderRadius: 10,
		overflow: 'hidden',
	},
	actorInfo: {},
});
