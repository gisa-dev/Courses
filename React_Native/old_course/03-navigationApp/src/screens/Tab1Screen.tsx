import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {
	const insets = useSafeAreaInsets();
	useEffect(() => {
		console.log('Tab 1 Screen effect');
	}, []);

	return (
		<View style={{ ...styles.globalMargin, marginTop: insets.top }}>
			<Text style={styles.title}>Icons</Text>

			<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
				<TouchableIcon iconName='airplane-outline' />
				<TouchableIcon iconName='attach-outline' />
				<TouchableIcon iconName='bonfire-outline' />
				<TouchableIcon iconName='calculator-outline' />
				<TouchableIcon iconName='chatbubble-ellipses-outline' />
				<TouchableIcon iconName='image-outline' />
				<TouchableIcon iconName='leaf-outline' />
			</View>
		</View>
	);
};

export default Tab1Screen;
