import { Text, View } from 'react-native';
import { useThemeContext } from '../context/theme/useThemeContext';

const FlatListItemSeparator = () => {
	const {
		theme: { colors },
	} = useThemeContext();
	return (
		<View
			style={{
				borderBottomWidth: 1.5,
				borderColor: colors.border,
				opacity: 0.5,
				marginVertical: 8,
			}}
		/>
	);
};

export default FlatListItemSeparator;
