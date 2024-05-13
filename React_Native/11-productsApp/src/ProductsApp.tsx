import { AppState } from './presentation/components'
import { StackNavigator } from './presentation/navigation/StackNavigator'

const ProductsApp = () => {
	return (
		<AppState>
			<StackNavigator />
		</AppState>
	)
}

export default ProductsApp
