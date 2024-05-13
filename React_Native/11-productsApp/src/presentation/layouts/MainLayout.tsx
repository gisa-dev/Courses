import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
	Divider,
	Layout,
	TopNavigation,
	TopNavigationAction
} from '@ui-kitten/components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RootStackParams } from '../navigation/StackNavigator'
import { CustomIcon } from '../components'

interface Props {
	title: string
	subtitle?: string
	rightAction?: () => void
	rightActionIcon?: string
	children?: React.ReactNode
}
export const MainLayout = ({
	title,
	subtitle,
	rightAction,
	rightActionIcon,
	children
}: Props) => {
	const { goBack, canGoBack } =
		useNavigation<StackNavigationProp<RootStackParams>>()

	const { top } = useSafeAreaInsets()

	const renderBackAction = () => (
		<TopNavigationAction
			icon={<CustomIcon name='arrow-back-outline' />}
			onPress={goBack}
		/>
	)

	const RenderRightAction = () => {
		if (!rightActionIcon || !rightAction) return null
		return (
			<TopNavigationAction
				icon={<CustomIcon name={rightActionIcon} />}
				onPress={rightAction}
			/>
		)
	}

	return (
		<Layout style={{ paddingTop: top }}>
			<TopNavigation
				title={title}
				subtitle={subtitle}
				alignment='center'
				accessoryLeft={canGoBack() ? renderBackAction : undefined}
				accessoryRight={() => <RenderRightAction />}
			/>
			<Divider />
			<Layout style={{ height: '100%' }}>{children}</Layout>
		</Layout>
	)
}
