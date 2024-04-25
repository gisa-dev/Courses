import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { Alert, ScrollView, useWindowDimensions } from 'react-native'
import { CustomIcon } from '../../components'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../../navigation/StackNavigator'
import { useState } from 'react'
import { useAuthStore } from '../../store/auth/useAuthStore'

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

export const LoginScreen = ({ navigation }: Props) => {
	const { login } = useAuthStore()
	const [form, setForm] = useState({ email: '', password: '' })
	const [isPosting, setIsPosting] = useState(false)
	const { height } = useWindowDimensions()

	const onLogin = async () => {
		if (form.email.length === 0 || form.password.length === 0) return

		setIsPosting(true)
		const wasSuccessful = await login(form.email, form.password)
		setIsPosting(false)

		if (wasSuccessful) return

		Alert.alert('Error', 'User or password incorrect')
	}

	return (
		<Layout style={{ flex: 1 }}>
			<ScrollView style={{ marginHorizontal: 40 }}>
				{/* title */}
				<Layout style={{ paddingTop: height * 0.35 }}>
					<Text category='h1'>Enter</Text>
					<Text category='p2'>Please Enter to continue</Text>
				</Layout>

				{/* input */}
				<Layout style={{ marginTop: 20 }}>
					<Input
						accessoryLeft={<CustomIcon name='email-outline' />}
						placeholder='Email'
						style={{ marginBottom: 10 }}
						keyboardType='email-address'
						autoCapitalize='none'
						value={form.email}
						onChangeText={(email) => setForm({ ...form, email })}
					/>
					<Input
						accessoryLeft={<CustomIcon name='lock-outline' />}
						placeholder='Password'
						style={{ marginBottom: 10 }}
						autoCapitalize='none'
						secureTextEntry
						value={form.password}
						onChangeText={(password) => setForm({ ...form, password })}
					/>
				</Layout>
				{/* space */}
				<Layout style={{ height: 10 }} />
				{/* button */}
				<Layout>
					<Button
						disabled={isPosting}
						accessoryRight={<CustomIcon name='arrow-forward-outline' white />}
						onPress={onLogin}
					>
						Login
					</Button>
				</Layout>

				<Layout style={{ height: 50 }} />
				{/* info create account */}
				<Layout
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'flex-end'
					}}
				>
					<Text>Don't have an account?</Text>
					<Text
						status='primary'
						category='s1'
						onPress={() => navigation.navigate('RegisterScreen')}
					>
						{' '}
						Sign up
					</Text>
				</Layout>
			</ScrollView>
		</Layout>
	)
}
