import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import FadeInImage from '../components/FadeInImage';

const InfiniteScrollScreen = () => {
	const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

	const loadMore = () => {
		let newArray: number[] = [];

		for (let i = 0; i < 5; i++) {
			newArray[i] = numbers.length + i;
		}

		setTimeout(() => {
			setNumbers([...numbers, ...newArray]);
		}, 1500);
	};

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={numbers}
				ListHeaderComponent={() => (
					<View style={{ marginHorizontal: 20 }}>
						<HeaderTitle title='Infinite Scroll' />
					</View>
				)}
				keyExtractor={(item) => item.toString()}
				renderItem={({ item }) => (
					<FadeInImage
						uri={`https://picsum.photos/id/${item}/1024/1024`}
						style={{
							width: '100%',
							height: 400,
						}}
					/>
				)}
				onEndReached={loadMore}
				onEndReachedThreshold={0.5}
				ListFooterComponent={() => (
					<View
						style={{
							height: 150,
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<ActivityIndicator size={20} color='#5856D6' />
					</View>
				)}
			/>
		</View>
	);
};

export default InfiniteScrollScreen;
