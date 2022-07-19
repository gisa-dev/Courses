import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const TabOneScreen = () => {
	useEffect(() => {
		console.log('TabOneScreen');
	}, []);

	return (
		<View>
			<Text>TabOneScreen</Text>
		</View>
	);
};

export default TabOneScreen;
