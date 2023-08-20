import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

const FlatListHeader = () => {
	const { top } = useSafeAreaInsets();
	return (
		<View style={{ marginTop: top + 20, marginBottom: 20 }}>
			<Text style={styles.title}>Menu Options</Text>
		</View>
	);
};

export default FlatListHeader;
