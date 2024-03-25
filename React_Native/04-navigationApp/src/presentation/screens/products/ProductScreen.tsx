import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';

export const ProductScreen = () => {
  const route = useRoute<RouteProp<RootStackParams, 'Product'>>();
  const navigation = useNavigation();

  const {id, name} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>Product Screen</Text>
      <Text>
        id:{id}
        name:{name}
      </Text>
    </View>
  );
};
