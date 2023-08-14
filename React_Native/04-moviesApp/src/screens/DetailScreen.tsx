import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	ScrollView,
} from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RootStackParams } from '../navigator/StackNavigator';


const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const DetailScreen = ({ route }: Props) => {
	const movie = route.params;
	const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	return (
		<ScrollView>
			<View style={styles.imageContainer}>
				<View style={styles.imageBorder}>
					<Image source={{ uri }} style={styles.image} />
				</View>
			</View>
			<View style={styles.marginContainer}>
				<Text style={styles.title}>{movie.title}</Text>
			</View>
			<View style={styles.marginContainer}>
				<Ionicons name='star-outline' size={24} color='black' />
			</View>
		</ScrollView>
	);
};

export default DetailScreen;

const styles = StyleSheet.create({
	imageContainer: {
		width: '100%',
		height: screenHeight * 0.7,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,
		elevation: 10,
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
	},
	imageBorder: {
		flex: 1,
		overflow: 'hidden',
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
	},
	image: {
		flex: 1,
	},
	marginContainer: {
		marginHorizontal: 20,
		marginTop: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
