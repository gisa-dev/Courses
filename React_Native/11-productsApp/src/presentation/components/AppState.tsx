import 'react-native-gesture-handler'
import { PropsWithChildren } from 'react'
import { useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from '../providers/AuthProvider'

const queryClient = new QueryClient()

export const AppState = ({ children }: PropsWithChildren) => {
	const colorScheme = useColorScheme()
	const theme = colorScheme === 'dark' ? eva.dark : eva.light
	const backgroundColor =
		colorScheme === 'dark' ? theme['color-basic-800'] : theme['color-basic-100']
	return (
		<QueryClientProvider client={queryClient}>
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

					<AuthProvider>{children}</AuthProvider>
				</NavigationContainer>
			</ApplicationProvider>
		</QueryClientProvider>
	)
}
