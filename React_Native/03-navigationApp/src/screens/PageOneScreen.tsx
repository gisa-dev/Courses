import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
// import {StackScreenProps} from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import {styles} from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

const PageOneScreen = ({navigation}: Props) => {
	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => <Button title="Menu" onPress={() => navigation.toggleDrawer()} />,
		});
	}, []);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>PageOneScreen</Text>

			<Button
				title="Go Page Two"
				onPress={() => {
					navigation.navigate('PageTwo');
				}}
			/>
			<Text style={{marginVertical: 20, fontSize:20}}>Navigate with arguments</Text>
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
