import { useState, useEffect } from 'react';
import { Categoria, CategoriaResponse } from '../interfaces/appInterfaces';
import cafeApi from '../api/cafeApi';

export const useCategories = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [categories, setCategories] = useState<Categoria[]>([]);

	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = async () => {
		const resp = await cafeApi.get<CategoriaResponse>('/categorias');

		setCategories(resp.data.categorias);
		setIsLoading(false);
	};

	return {
		categories,
		isLoading,
	};
};
