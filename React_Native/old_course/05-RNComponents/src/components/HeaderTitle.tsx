import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { useThemeContext } from '../context/theme/useThemeContext';

interface Props {
	title: string;
}

const HeaderTitle = ({ title }: Props) => {
	const {
		theme: { colors },
	} = useThemeContext();
	const { top } = useSafeAreaInsets();
	return (
		<View style={{ marginTop: top + 20, marginBottom: 20 }}>
			<Text style={{ ...styles.title, color: colors.text }}>{title}</Text>
		</View>
	);
};

export default HeaderTitle;
