import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { useProductsContext } from '../context/products/useProductsContext';
import { ProductsStackParams } from '../navigator/ProductsStack';
import { Producto } from '../interfaces/appInterfaces';

interface Props
	extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> {}

const ProductsScreen = ({ navigation }: Props) => {
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => {
						navigation.navigate('ProductScreen', {});
					}}
					style={{
						marginRight: 10,
					}}
				>
					<Text
						style={{
							fontSize: 15,
							fontWeight: 'bold',
							color: 'gray',
						}}
					>
						Add
					</Text>
				</TouchableOpacity>
			),
		});
	}, []);

	const goToProduct = (item: Producto) => {
		navigation.navigate('ProductScreen', {
			id: item._id,
			name: item.nombre,
		});
	};

	const { products } = useProductsContext();
	console.log(products);
	return (
		<View style={{ flex: 1, marginHorizontal: 10 }}>
			<FlatList
				data={products}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => (
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={() => goToProduct(item)}
					>
						<Text style={styles.productName}>{item.nombre}</Text>
					</TouchableOpacity>
				)}
				ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
			/>
		</View>
	);
};

export default ProductsScreen;

const styles = StyleSheet.create({
	productName: {
		fontSize: 20,
		paddingVertical: 5,
	},
	itemSeparator: {
		borderBottomWidth: 3,
		borderBottomColor: 'rgba(0,0,0,0.1)',
	},
});
