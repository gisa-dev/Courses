import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { ProductsStackParams } from '../navigator/ProductsStack';
import { useCategories } from '../hooks/useCategories';

interface Props
	extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}
const ProductScreen = ({ route, navigation }: Props) => {
	const { isLoading, categories } = useCategories();
	const [selectedLanguage, setSelectedLanguage] = useState();
	const { id, name = '' } = route.params;

	const headerTitle = name ? name : 'New Product';

	useEffect(() => {
		navigation.setOptions({
			title: headerTitle,
		});
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.label}>Name of Product:</Text>
				<TextInput placeholder='Product' style={styles.textInput} />
				{/* Picker */}
				<Text style={styles.label}>Category:</Text>

				<Picker
					selectedValue={selectedLanguage}
					onValueChange={(itemValue, itemIndex) =>
						setSelectedLanguage(itemValue)
					}
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
					<TouchableOpacity activeOpacity={0.8} style={styles.button}>
						<Text style={styles.buttonText}>Save</Text>
						<Feather name='save' size={25} color='white' />
					</TouchableOpacity>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<TouchableOpacity activeOpacity={0.8} style={styles.button}>
						<Text style={styles.buttonText}>Camera</Text>
						<Feather name='camera' size={25} color='white' />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.8} style={styles.button}>
						<Text style={styles.buttonText}>Galery</Text>
						<Feather name='image' size={25} color='white' />
					</TouchableOpacity>
				</View>
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
		justifyContent: 'center',
		alignItems: 'center',
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
