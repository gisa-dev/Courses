import { useContext } from 'react';
import { ProductsContext } from './ProductsContext';

export const useProductsContext = () => {
	const {
		products,
		addProducts,
		deleteProducts,
		loadProductById,
		loadProducts,
		updateProducts,
		uploadImage,
	} = useContext(ProductsContext);

	return {
		products,
		addProducts,
		deleteProducts,
		loadProductById,
		loadProducts,
		updateProducts,
		uploadImage,
	};
};
