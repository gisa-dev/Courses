import 'react-native-gesture-handler'
import React from 'react'
import { useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'

import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { StackNavigator } from './presentation/navigation/StackNavigator'
import { AuthProvider } from './presentation/providers/AuthProvider'

const ProductsApp = () => {
	const colorScheme = useColorScheme()
	const theme = colorScheme === 'dark' ? eva.dark : eva.light
	const backgroundColor =
		colorScheme === 'dark' ? theme['color-basic-800'] : theme['color-basic-100']

	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider {...eva} theme={theme}>
				<NavigationContainer
					theme={{
						dark: colorScheme === 'dark',
						colors: {
							primary: theme['color-primary-500'],
							background: backgroundColor,
							text: theme['text-basic-color'],
							border: theme['color-basic-800'],
							notification: theme['color-primary-500'],
							card: theme['color-basic-100']
						}
					}}
				>
					<StatusBar style='auto' />

					<AuthProvider>
						<StackNavigator />
					</AuthProvider>
				</NavigationContainer>
			</ApplicationProvider>
		</>
	)
}

export default ProductsApp
