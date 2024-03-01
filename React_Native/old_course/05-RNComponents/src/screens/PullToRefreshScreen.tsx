import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeContext } from '../context/theme/useThemeContext';

const PullToRefreshScreen = () => {
	const {
		theme: { colors },
	} = useThemeContext();
	const { top } = useSafeAreaInsets();
	const [refreshing, setRefreshing] = useState(false);
	const [data, setData] = useState<string>();

	const onRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			console.log('finished');
			setRefreshing(false);
			setData('Hello world');
		}, 2500);
	};

	return (
		<ScrollView
			style={{
				marginTop: refreshing ? top : 0,
			}}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
					progressViewOffset={10}
					progressBackgroundColor={colors.primary}
					colors={[colors.background]}
					tintColor={colors.text}
				/>
			}
		>
			<View style={styles.globalMargin}>
				<HeaderTitle title='Pull To Refresh' />
				{data && <HeaderTitle title={data} />}
			</View>
		</ScrollView>
	);
};

export default PullToRefreshScreen;
