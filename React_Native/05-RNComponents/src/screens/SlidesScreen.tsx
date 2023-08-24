import { View, Text, ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';

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

const SlidesScreen = () => {
	return (
		<SafeAreaView style={{flex:1,paddingTop:50}}>
			<Carousel
			
			/>
		</SafeAreaView>
	);
};

export default SlidesScreen;
