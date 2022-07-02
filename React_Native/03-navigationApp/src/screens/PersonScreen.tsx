import {Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import { RootStackParam } from '../navigation/StackNavigator';

interface RouterParams {
  id: number;
  name: string;
}

interface Props extends StackScreenProps<RootStackParam, 'Person'> {}

const PersonScreen = ({route, navigation}: Props) => {
	// const params = route.params as RouterParams;
	const params = route.params;

  useEffect(()=>{

    navigation.setOptions({
     title: params.name 
    })


  }, [])

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
		</View>
	);
};

export default PersonScreen;
