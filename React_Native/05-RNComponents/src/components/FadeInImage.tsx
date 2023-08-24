import {
	View,
	Text,
	Animated,
	ActivityIndicator,
	ImageStyle,
} from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useState } from 'react';

interface Props {
	uri: string;
	style?: Animated.WithAnimatedObject<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {
	const [isloading, setIsloading] = useState(true);
	const { opacity, fadeIn } = useAnimation();

	const finishLoading = () => {
		setIsloading(false);
		fadeIn();
	};

	return (
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			{isloading && (
				<ActivityIndicator
					color='#5856D6'
					size={30}
					style={{ position: 'absolute' }}
				/>
			)}

			<Animated.Image
				source={{ uri }}
				onLoadEnd={finishLoading}
				style={{ ...style, opacity }}
			/>
		</View>
	);
};

export default FadeInImage;
