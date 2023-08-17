import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import currencyFormatter from 'currency-formatter';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import CastItem from './CastItem';

interface Props {
	movieFull: MovieFull;
	cast: Cast[];
}

const MovieDetails = ({ movieFull, cast }: Props) => {
	return (
		<>
			{/* Details */}
			<View style={{ marginHorizontal: 20 }}>
				<View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
					<Ionicons name='star-outline' size={16} color='gray' />
					<Text>{movieFull.vote_average}</Text>
					<Text>
						- {movieFull.genres.map((genre) => genre.name).join(', ')}
					</Text>
				</View>

				<Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
					History
				</Text>
				<Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>
				<Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
					Budget
				</Text>
				<Text style={{ fontSize: 18 }}>
					{currencyFormatter.format(movieFull.budget, { code: 'USD' })}
				</Text>
			</View>
			{/* Cast */}

			<View style={{ marginTop: 10, marginBottom: 100 }}>
				<Text
					style={{
						fontSize: 23,
						marginTop: 10,
						fontWeight: 'bold',
						marginHorizontal: 20,
					}}
				>
					Actors
				</Text>
				<FlatList
					data={cast}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => <CastItem actor={item} />}
					horizontal
					contentContainerStyle={{ gap: 10 }}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		</>
	);
};

export default MovieDetails;

const styles = StyleSheet.create({});
