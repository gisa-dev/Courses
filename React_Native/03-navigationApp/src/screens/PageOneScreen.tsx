import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const PageOneScreen = ({navigation}: Props) => {
	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>PageOneScreen</Text>

			<Button
				title="Go Page Two"
				onPress={() => {
					navigation.navigate('PageTwo');
				}}
			/>
			<Text>Navigate with arguments</Text>
			<View style={{flexDirection: 'row'}}>
				<TouchableOpacity
					style={{...styles.bigButton, backgroundColor: 'blue'}}
					onPress={() => {
						navigation.navigate('Person', {id: 1, name: 'Pedro'});
					}}
				>
					<Text style={styles.bigButtonText}>Pedro</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.bigButton}
					onPress={() => {
						navigation.navigate('Person', {id: 2, name: 'Maria'});
					}}
				>
					<Text style={styles.bigButtonText}>Maria</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default PageOneScreen;
