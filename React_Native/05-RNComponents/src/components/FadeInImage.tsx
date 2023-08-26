import {
	View,
	Text,
	Animated,
	ActivityIndicator,
	ImageStyle,
} from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useState } from 'react';
import { useThemeContext } from '../context/theme/useThemeContext';

interface Props {
	uri: string;
	style?: Animated.WithAnimatedObject<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {
	const {
		theme: { colors },
	} = useThemeContext();
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
					color={colors.primary}
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
