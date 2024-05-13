import React from 'react'
import { Image } from 'react-native'
import { List } from '@ui-kitten/components'
import { FadeInImage } from '../ui/FadeInImage'

interface Props {
	images: string[]
}

export const ProductImages = ({ images }: Props) => {
	return (
		<>
			{images.length === 0 ? (
				<Image
					source={require('../../../assets/no-product-image.png')}
					style={{ width: 300, height: 300 }}
				/>
			) : (
				<List
					data={images}
					keyExtractor={(item, index) => `${item}-${index}`}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<FadeInImage
							uri={item}
							style={{ width: 300, height: 300, marginHorizontal: 7 }}
						/>
					)}
				/>
			)}
		</>
	)
}
