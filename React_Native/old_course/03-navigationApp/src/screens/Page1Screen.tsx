import { Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useEffect} from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
// import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';



// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

const Page1Screen = ({ navigation }: Props) => {


	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<Button title='Menu' onPress={() => navigation.toggleDrawer()} />
			),
		});
	}, []);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Page1Screen</Text>

			<Button
				title='Go to Page 2'
				onPress={() => navigation.navigate('Page2')}
			/>
			<Text>Navigate with arguments</Text>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					activeOpacity={0.8}
					style={{
						...styles.largeButton,
						backgroundColor: '#FF9427',
					}}
					onPress={() =>
						navigation.navigate('Person', {
							id: 1,
							name: 'Pedro',
						})
					}
				>
					<Text style={styles.largeButtonText}>Pedro</Text>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.8}
					style={{
						...styles.largeButton,
						backgroundColor: '#5856D6',
					}}
					onPress={() =>
						navigation.navigate('Person', {
							id: 2,
							name: 'Maria',
						})
					}
				>
					<Text style={styles.largeButtonText}>Maria</Text>
				</TouchableOpacity>
			</View>

		
		</View>
	);
};

export default Page1Screen;
