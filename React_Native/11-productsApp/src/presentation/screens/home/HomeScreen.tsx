import { getProductsByPage } from '../../../actions/products/get-products-by-page'
import { useInfiniteQuery } from '@tanstack/react-query'
import { MainLayout } from '../../layouts/MainLayout'
import { FAB, FullScreenLoader, ProductList } from '../../components'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../navigation/StackNavigator'
import { useAuthStore } from '../../store/auth/useAuthStore'

export const HomeScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParams>>()
	const {logout} = useAuthStore()

	// const { isLoading, data: products = [] } = useQuery({
	// 	queryKey: ['products', 'infinite'],
	// 	staleTime: 1000 * 60 * 60, // 1 hour
	// 	queryFn: () => getProductsByPage(0)
	// })
	const { isLoading, data, fetchNextPage } = useInfiniteQuery({
		queryKey: ['products', 'infinite'],
		staleTime: 1000 * 60 * 60, // 1 hour
		initialPageParam: 0,
		queryFn: async (params) => {
			return await getProductsByPage(params.pageParam)
		},
		getNextPageParam: (lastPage, allPages) => allPages.length
	})

	return (
		<>
			<MainLayout
				title='TesloShop - Products'
				subtitle='See our products'
				rightActionIcon='person-outline'
				rightAction={logout}
			>
				{isLoading ? (
					<FullScreenLoader />
				) : (
					<ProductList
						products={data?.pages.flat() ?? []}
						fetchNextPage={fetchNextPage}
					/>
				)}
			</MainLayout>
			<FAB
				iconName='plus-outline'
				style={{ position: 'absolute', right: 20, bottom: 30 }}
				onPress={() => navigation.navigate('ProductScreen', {
					productId: 'new'
				})}
			/>
		</>
	)
}
