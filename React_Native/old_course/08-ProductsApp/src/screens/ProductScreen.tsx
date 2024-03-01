import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
	TouchableOpacity,
	Image,
	Alert,
} from 'react-native';
import { useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import {
	launchCameraAsync,
	launchImageLibraryAsync,
	MediaTypeOptions,
	requestCameraPermissionsAsync,
	requestMediaLibraryPermissionsAsync,
} from 'expo-image-picker';
import { ProductsStackParams } from '../navigator/ProductsStack';
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { useProductsContext } from '../context/products/useProductsContext';

interface Props
	extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}

const ProductScreen = ({ route, navigation }: Props) => {
	const { id = '', name = '' } = route.params;

	const [tempUri, setTempUri] = useState<string>('');

	const {
		loadProductById,
		addProducts,
		updateProducts,
		deleteProducts,
		uploadImage,
	} = useProductsContext();

	const { isLoading, categories } = useCategories();

	const { _id, categoriaId, nombre, img, form, onChange, setFormValue } =
		useForm({
			_id: id,
			categoriaId: '',
			nombre: name,
			img: '',
		});

	useEffect(() => {
		(async () => {
			await requestCameraPermissionsAsync();
			await requestMediaLibraryPermissionsAsync();
		})();
	}, []);

	useEffect(() => {
		navigation.setOptions({
			title: nombre ? nombre : 'Product Name',
		});
	}, [nombre]);

	useEffect(() => {
		loadProduct();
	}, []);

	const loadProduct = async () => {
		if (id.length === 0) return;

		const product = await loadProductById(id);
		setFormValue({
			_id: id,
			categoriaId: product.categoria._id,
			img: product.img || '',
			nombre,
		});
	};

	const saveOrUpdate = async () => {
		if (id.length > 0) {
			updateProducts(categoriaId, nombre, id);
		} else {
			const tempCategoriaId = categoriaId || categories[0]._id;
			const newProduct = await addProducts(tempCategoriaId, nombre);
			onChange(newProduct!._id, '_id');
		}
	};

	const removeProduct = () => {
		Alert.alert(
			'Delete Product',
			'are you sure you want to delete this product?',
			[
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{
					text: 'Delete',
					onPress: () => {
						deleteProducts(_id);
						alert('Product deleted successfully');
						navigation.pop();
					},
				},
			],
		);
	};

	const takePhoto = async () => {
		const resp = await launchCameraAsync({
			mediaTypes: MediaTypeOptions.Images,
			quality: 0.5,
		});

		if (resp.canceled) return;
		if (!resp.assets[0].uri) return;

		setTempUri(resp.assets[0].uri);
		uploadImage(resp, _id)
	};

	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={styles.label}>Name of Product:</Text>
				<TextInput
					placeholder='Product'
					style={styles.textInput}
					value={nombre}
					onChangeText={(value) => onChange(value, 'nombre')}
				/>

				{/* Picker */}
				<Text style={styles.label}>Category:</Text>

				<Picker
					selectedValue={categoriaId}
					onValueChange={(value) => onChange(value, 'categoriaId')}
				>
					{categories.map((category) => (
						<Picker.Item
							key={category._id}
							label={category.nombre}
							value={category._id}
						/>
					))}
				</Picker>

				<View style={styles.buttonContainer}>
					<TouchableOpacity
						activeOpacity={0.8}
						style={styles.button}
						onPress={saveOrUpdate}
					>
						<Text style={styles.buttonText}>Save</Text>
						<Feather name='save' size={25} color='white' />
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.8}
						style={styles.button}
						onPress={removeProduct}
						disabled={!_id}
					>
						<Text style={styles.buttonText}>Delete</Text>
						<Feather name='trash-2' size={25} color='white' />
					</TouchableOpacity>
				</View>

				{_id.length > 0 && (
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginBottom: 20,
						}}
					>
						<TouchableOpacity activeOpacity={0.8} style={styles.button}>
							<Text style={styles.buttonText} onPress={takePhoto}>
								Camera
							</Text>
							<Feather name='camera' size={25} color='white' />
						</TouchableOpacity>
						<TouchableOpacity activeOpacity={0.8} style={styles.button}>
							<Text style={styles.buttonText}>Galery</Text>
							<Feather name='image' size={25} color='white' />
						</TouchableOpacity>
					</View>
				)}

				{img.length > 0 && !tempUri && (
					<Image
						source={{ uri: img }}
						style={{ width: '100%', height: 300, borderRadius: 20 }}
					/>
				)}

				{tempUri && (
					<Image
						source={{ uri: tempUri }}
						style={{ width: '100%', height: 300, borderRadius: 20 }}
					/>
				)}
			</ScrollView>
		</View>
	);
};

export default ProductScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
		marginHorizontal: 20,
	},
	label: {
		fontSize: 18,
	},
	textInput: {
		borderWidth: 1,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 20,
		borderColor: 'rgba(0,0,0,0.2)',
		height: 45,
		marginTop: 5,
		marginBottom: 15,
	},
	buttonContainer: {
		marginVertical: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	button: {
		backgroundColor: '#252525',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		gap: 10,
	},
	buttonText: {
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold',
	},
});
