import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors, styles } from '../theme/appTheme';

const Tab1Screen = () => {
	useEffect(() => {
		console.log('Tab 1 Screen effect');
	}, []);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Icons</Text>

			<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
				<Ionicons name='airplane-outline' size={80} color={colors.primary} />
				<Ionicons name='attach-outline' size={80} color={colors.primary} />
				<Ionicons name='bonfire-outline' size={80} color={colors.primary} />
				<Ionicons name='calculator-outline' size={80} color={colors.primary} />
				<Ionicons
					name='chatbubble-ellipses-outline'
					size={80}
					color={colors.primary}
				/>
				<Ionicons name='image-outline' size={80} color={colors.primary} />
				<Ionicons name='leaf-outline' size={80} color={colors.primary} />
			</View>
		</View>
	);
};

export default Tab1Screen;
