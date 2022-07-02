import {View, Text, Button} from 'react-native';
import React, { useEffect } from 'react';
import {styles} from '../theme/appTheme';
import {CommonActions, useNavigation} from '@react-navigation/native';

const PageTwoScreen = () => {
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({
			title: 'Hello',
			headerBackTitle: 'Back'
		})
	}, [])
	

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>PageTwoScreen</Text>

			<Button
				title="Go Page Three"
				onPress={() => {
					navigation.dispatch(CommonActions.navigate({name: 'PageThree'}));
				}}
			/>
		</View>
	);
};

export default PageTwoScreen;
