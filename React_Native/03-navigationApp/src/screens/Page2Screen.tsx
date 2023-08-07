import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

const Page2Screen = () => {
	const navigator = useNavigation();

	useEffect(() => {
		navigator.setOptions({
			title: 'Hello World',
			headerBackTitle: 'Back'
		});
	}, []);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Page2Screen</Text>
			<Button
				title='Go to Page 3'
				onPress={() => navigator.dispatch(CommonActions.navigate('Page3'))}
			/>
		</View>
	);
};

export default Page2Screen;
