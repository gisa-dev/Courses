import { View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Background = () => {
	return (
		<View
			style={{
				position: 'absolute',
				backgroundColor: '#5856D6',
				width: windowWidth * 2,
				height: windowHeight * 1.5,
				top: -250,
				transform: [
					{
						rotate: '-70deg',
					},
				],
			}}
		/>
	);
};

export default Background;
