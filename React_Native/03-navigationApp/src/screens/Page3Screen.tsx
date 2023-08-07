import { Text, View, Button } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

const Page3Screen = ({ navigation }: Props) => {
	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Page3Screen</Text>

			<Button title='Regresar' onPress={() => navigation.pop()} />
			<Button title='Regresar pagina 1' onPress={() => navigation.popToTop()} />
		</View>
	);
};

export default Page3Screen;
