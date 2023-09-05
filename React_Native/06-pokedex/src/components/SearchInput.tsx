import {
	StyleProp,
	StyleSheet,
	Text,
	TextInput,
	View,
	ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
	onDebounce: (value: string) => void;
	style?: StyleProp<ViewStyle>;
}

const SearchInput = ({ style, onDebounce }: Props) => {
	const [textValue, setTextValue] = useState('');
	const deboncedValue = useDebouncedValue(textValue);

	useEffect(() => {
		onDebounce(deboncedValue);
	}, [deboncedValue]);

	return (
		<View style={{ ...styles.container, ...(style as any) }}>
			<View style={styles.textBackgorund}>
				<TextInput
					placeholder='Search Pokemon'
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.textInput}
					value={textValue}
					onChangeText={setTextValue}
				/>
				<Ionicons name='search-outline' color='gray' size={30} />
			</View>
		</View>
	);
};

export default SearchInput;

const styles = StyleSheet.create({
	container: {},
	textBackgorund: {
		backgroundColor: '#F3F1F3',
		borderRadius: 50,
		height: 40,
		paddingHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	textInput: {
		flex: 1,
		fontSize: 18,
	},
});
