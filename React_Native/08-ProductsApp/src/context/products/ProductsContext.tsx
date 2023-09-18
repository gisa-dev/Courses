import { createContext, useState, useEffect } from 'react';
import { ImagePickerResult } from 'expo-image-picker';
import { Producto, ProductsResponse } from '../../interfaces/appInterfaces';
import cafeApi from '../../api/cafeApi';
import { Platform } from 'react-native';

type ProductsContextProps = {
	products: Producto[];
	loadProducts: () => Promise<void>;
	addProducts: (
		categoryId: string,
		productName: string,
	) => Promise<Producto | undefined>;
	updateProducts: (
		categoryId: string,
		productName: string,
		productId: string,
	) => Promise<void>;
	deleteProducts: (id: string) => Promise<void>;
	loadProductById: (id: string) => Promise<Producto>;
	uploadImage: (data: any, id: string) => Promise<void>; // TODO: cambiar any
};

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({ children }: any) => {
	const [products, setProducts] = useState<Producto[]>([]);

	useEffect(() => {
		loadProducts();
	}, []);

	const loadProducts = async () => {
		const resp = await cafeApi.get<ProductsResponse>('/productos?limite=50');

		setProducts([...resp.data.productos]);
	};

	const addProducts = async (
		categoryId: string,
		productName: string,
	): Promise<Producto | undefined> => {
		try {
			const resp = await cafeApi.post<Producto>('/productos', {
				nombre: productName,
				categoria: categoryId,
			});

			setProducts([...products, resp.data]);
			return resp.data;
		} catch (error) {
			console.log(error);
		}
	};

	const updateProducts = async (
		categoryId: string,
		productName: string,
		productId: string,
	) => {
		try {
			const resp = await cafeApi.put<Producto>(`/productos/${productId}`, {
				nombre: productName,
				categoria: categoryId,
			});

			setProducts(
				products.map((product) => {
					return product._id === productId ? resp.data : product;
				}),
			);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteProducts = async (id: string) => {
		const resp = await cafeApi.delete<Producto>(`/productos/${id}`);
	};

	const loadProductById = async (id: string): Promise<Producto> => {
		const resp = await cafeApi.get<Producto>(`/productos/${id}`);

		return resp.data;
	};

	const uploadImage = async (data: ImagePickerResult, id: string) => {
		if (!data.assets) return;

		const fileToUpload = {
			uri:
				Platform.OS === 'ios'
					? data.assets[0].uri.replace('file://', '')
					: data.assets[0].uri,
			type: data.assets[0].type,
			name: data.assets[0].fileName,
		};

		

		const formData: any = new FormData();
		formData.append('archivo', fileToUpload);

		try {
			const resp = await cafeApi.put(`/uploads/productos/${id}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			console.log(resp);

			
		} catch (error) {
			console.log({ error });
		}
	};

	return (
		<ProductsContext.Provider
			value={{
				products,
				loadProducts,
				addProducts,
				updateProducts,
				deleteProducts,
				loadProductById,
				uploadImage,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};
