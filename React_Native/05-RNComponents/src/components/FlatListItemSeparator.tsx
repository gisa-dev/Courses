import { Text, View } from 'react-native';

const FlatListItemSeparator = () => {
	return (
		<View
			style={{
				borderBottomWidth: 1.5,
				borderColor: '#252525',
				opacity: 0.5,
				marginVertical: 8,
			}}
		/>
	);
};

export default FlatListItemSeparator;
