import { useState } from 'react'
import { RefreshControl } from 'react-native'
import { useQueryClient } from '@tanstack/react-query'
import { Layout, List } from '@ui-kitten/components'
import type { Product } from '../../../domain/entities/product'
import { ProductCard } from './ProductCard'

interface Props {
	products: Product[]
	fetchNextPage: () => void
}
export const ProductList = ({ products, fetchNextPage }: Props) => {
	const [isRefreshing, setIsRefreshing] = useState(false)
	const queryClient = useQueryClient()

	const onPullToRefresh = async () => {
		setIsRefreshing(true)
		// Sleep 2 seconds
		await new Promise((resolve) => setTimeout(resolve, 200))
		queryClient.invalidateQueries({ queryKey: ['products', 'infinite'] })
		setIsRefreshing(false)
	}
	return (
		<List
			data={products}
			keyExtractor={(item, index) => `${item.id}-${index}`}
			numColumns={2}
			showsVerticalScrollIndicator={false}
			renderItem={({ item }) => <ProductCard product={item} />}
			ListFooterComponent={() => <Layout style={{ height: 150 }} />}
			onEndReached={fetchNextPage}
			onEndReachedThreshold={0.6}
			refreshControl={
				<RefreshControl refreshing={isRefreshing} onRefresh={onPullToRefresh} />
			}
		/>
	)
}
