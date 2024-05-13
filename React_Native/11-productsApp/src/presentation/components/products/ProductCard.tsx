import { Image } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Card, Text } from '@ui-kitten/components'
import type { Product } from '../../../domain/entities/product'
import { FadeInImage } from '../ui/FadeInImage'
import { RootStackParams } from '../../navigation/StackNavigator'

interface Props {
	product: Product
}
export const ProductCard = ({ product }: Props) => {
	const navigation = useNavigation<NavigationProp<RootStackParams>>()

	return (
		<Card
			onPress={() =>
				navigation.navigate('ProductScreen', { productId: product.id })
			}
			style={{
				flex: 1,
				margin: 3,
				backgroundColor: '#F9F9F9',
				borderRadius: 25
			}}
		>
			{product.images.length === 0 ? (
				<Image
					source={require('../../../assets/no-product-image.png')}
					style={{ width: '100%', height: 200 }}
				/>
			) : (
				<FadeInImage
					uri={product.images[0]}
					style={{ width: '100%', height: 200 }}
				/>
			)}
			<Text numberOfLines={2} style={{ textAlign: 'center' }}>
				{product.title}
			</Text>
		</Card>
	)
}
