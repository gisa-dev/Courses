import { useRef } from 'react'
import { ScrollView } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Formik } from 'formik'
import {
	Button,
	ButtonGroup,
	Input,
	Layout,
	useTheme
} from '@ui-kitten/components'
import { MainLayout } from '../../layouts/MainLayout'
import { RootStackParams } from '../../navigation/StackNavigator'
import { CustomIcon, ProductImages } from '../../components'
import { Product } from '../../../domain/entities/product'
import { getProductById, updateCreateProduct } from '../../../actions/products'
import { genders, sizes } from '../../../config/constants/constants'



interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> {}

export const ProductScreen = ({ route }: Props) => {
	const productIdRef = useRef(route.params.productId)
	const theme = useTheme()

	const queryClient = useQueryClient()

	const { data: product } = useQuery({
		queryKey: ['products', productIdRef.current],
		queryFn: () => getProductById(productIdRef.current)
	})

	const mutation = useMutation({
		mutationFn: (data: Product) =>
			updateCreateProduct({ ...data, id: productIdRef.current }),
		onSuccess: (data: Product) => {
			productIdRef.current = data.id // set new product id

			queryClient.invalidateQueries({ queryKey: ['products', 'infinite'] })
			queryClient.invalidateQueries({ queryKey: ['product', data.id] })
		}
	})

	if (!product) {
		return <MainLayout title='Loading...' />
	}

	return (
		<Formik
			initialValues={product}
			onSubmit={(values) => mutation.mutate(values)}
		>
			{({ handleChange, handleSubmit, values, errors, setFieldValue }) => (
				<MainLayout title={values.title} subtitle={`Price: ${values.price}`}>
					<ScrollView style={{ flex: 1 }}>
						{/* Images of product */}

						<Layout
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								marginVertical: 10
							}}
						>
							<ProductImages images={values.images} />
						</Layout>

						{/* Form */}
						<Layout>
							<Input
								label='Title'
								value={values.title}
								style={{ marginVertical: 5 }}
								onChangeText={handleChange('title')}
							/>
							<Input
								label='Slug'
								value={values.slug}
								style={{ marginVertical: 5 }}
								onChangeText={handleChange('slug')}
							/>
							<Input
								label='Description'
								value={values.description}
								multiline
								numberOfLines={5}
								style={{ marginVertical: 5 }}
								onChangeText={handleChange('description')}
							/>
						</Layout>

						{/* Price and Stock */}
						<Layout
							style={{
								marginVertical: 5,
								marginHorizontal: 15,
								flexDirection: 'row',
								gap: 10
							}}
						>
							<Input
								label='Price'
								value={values.price.toString()}
								style={{ flex: 1 }}
								onChangeText={handleChange('price')}
								keyboardType='number-pad'
							/>
							<Input
								label='Stock'
								value={values.stock.toString()}
								style={{ flex: 1 }}
								onChangeText={handleChange('stock')}
								keyboardType='number-pad'
							/>
						</Layout>

						<ButtonGroup
							style={{ margin: 2, marginTop: 20, marginHorizontal: 15 }}
							appearance='outline'
						>
							{sizes.map((size) => (
								<Button
									onPress={() =>
										setFieldValue(
											'sizes',
											values.sizes.includes(size)
												? values.sizes.filter((s) => s !== size)
												: [...values.sizes, size]
										)
									}
									key={size}
									style={{
										flex: 1,
										backgroundColor: values.sizes.includes(size)
											? theme['color-primary-200']
											: undefined
									}}
								>
									{size}
								</Button>
							))}
						</ButtonGroup>

						<ButtonGroup
							style={{ margin: 2, marginTop: 20, marginHorizontal: 15 }}
							appearance='outline'
						>
							{genders.map((gender) => (
								<Button
									onPress={() => setFieldValue('gender', gender)}
									key={gender}
									style={{
										flex: 1,
										backgroundColor: values.gender.startsWith(gender)
											? theme['color-primary-200']
											: undefined
									}}
								>
									{gender}
								</Button>
							))}
						</ButtonGroup>

						{/* Save button */}
						<Button
							disabled={mutation.isPending}
							onPress={() => handleSubmit()}
							accessoryLeft={<CustomIcon name='save-outline' white />}
							style={{ margin: 15 }}
						>
							Save
						</Button>

						<Layout style={{ height: 200 }} />
					</ScrollView>
				</MainLayout>
			)}
		</Formik>
	)
}
