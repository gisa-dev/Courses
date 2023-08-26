import { useRef, useState } from 'react';
import {
	View,
	Text,
	ImageSourcePropType,
	Dimensions,
	Image,
	StyleSheet,
	TouchableOpacity,
	Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Ionicons } from '@expo/vector-icons';
import { useAnimation } from '../hooks/useAnimation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useThemeContext } from '../context/theme/useThemeContext';

const windowWidth = Dimensions.get('window').width;

interface Slide {
	title: string;
	desc: string;
	img: ImageSourcePropType;
}

const items: Slide[] = [
	{
		title: 'Titulo 1',
		desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
		img: require('../../assets/img/slide-1.png'),
	},
	{
		title: 'Titulo 2',
		desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
		img: require('../../assets/img/slide-2.png'),
	},
	{
		title: 'Titulo 3',
		desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
		img: require('../../assets/img/slide-3.png'),
	},
];

interface Props extends NativeStackScreenProps<any, any> {}

const SlidesScreen = ({ navigation }: Props) => {
	const {
		theme: { colors },
	} = useThemeContext();
	const [activeDotIndex, setactiveDotIndex] = useState(0);
	const { opacity, fadeIn, fadeOut } = useAnimation();
	const isVisible = useRef(false);

	const renderItem = (item: Slide) => {
		return (
			<View
				style={{ ...styles.carouselItem, backgroundColor: colors.background }}
			>
				<Image source={item.img} style={styles.carouselImage} />
				<Text style={{ ...styles.carouselTitle, color: colors.primary }}>
					{item.title}
				</Text>
				<Text style={{ ...styles.carouselSubTitle, color: colors.text }}>
					{item.desc}
				</Text>
			</View>
		);
	};
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
			<Carousel
				data={items}
				renderItem={({ item }) => renderItem(item)}
				itemWidth={windowWidth}
				sliderWidth={windowWidth}
				layout='default'
				onSnapToItem={(index) => {
					setactiveDotIndex(index);

					if (index === 1) {
						isVisible.current = false;
						fadeOut();
					}
				}}
				onEndReached={() => {
					isVisible.current = true;
					fadeIn();
				}}
			/>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginHorizontal: 20,
					alignItems: 'center',
				}}
			>
				<Pagination
					dotsLength={items.length}
					activeDotIndex={activeDotIndex}
					dotStyle={{
						width: 10,
						height: 10,
						borderRadius: 10,
						backgroundColor: colors.primary,
					}}
				/>

				<Animated.View style={{ opacity }}>
					<TouchableOpacity
						activeOpacity={0.8}
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: colors.primary,
							width: 140,
							height: 50,
							borderRadius: 15,
						}}
						onPress={() => {
							if (isVisible.current) {
								navigation.navigate('Home');
							}
						}}
					>
						<Text style={{ color: 'white', fontSize: 25 }}>Enter</Text>
						<Ionicons name='chevron-forward-outline' size={30} color='white' />
					</TouchableOpacity>
				</Animated.View>
			</View>
		</SafeAreaView>
	);
};

export default SlidesScreen;

const styles = StyleSheet.create({
	carouselItem: {
		flex: 1,
		borderRadius: 5,
		padding: 5,
		justifyContent: 'center',
	},
	carouselImage: {
		width: 350,
		height: 400,
		resizeMode: 'center',
	},
	carouselTitle: {
		fontSize: 30,
		fontWeight: 'bold',
	},
	carouselSubTitle: {
		fontSize: 16,
	},
});
