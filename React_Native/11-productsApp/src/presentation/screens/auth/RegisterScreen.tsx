import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { Alert, ScrollView, useWindowDimensions } from 'react-native'
import { CustomIcon } from '../../components'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../../navigation/StackNavigator'
import { useState } from 'react'
import { useAuthStore } from '../../store/auth/useAuthStore'

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

export const RegisterScreen = ({ navigation }: Props) => {
	const [form, setForm] = useState({ email: '', password: '', fullname: '' })
	const [isPosting, setIsPosting] = useState(false)
	const { height } = useWindowDimensions()
	const { register } = useAuthStore()

	const onRegister = async () => {
		if (
			form.email.length === 0 ||
			form.password.length === 0 ||
			form.fullname.length === 0
		)
			return

		setIsPosting(true)
		const wasSuccessful = await register(
			form.email,
			form.password,
			form.fullname
		)
		setIsPosting(false)

		if (wasSuccessful) return

		Alert.alert('Error', 'User or password incorrect')
	}

	return (
		<Layout style={{ flex: 1 }}>
			<ScrollView style={{ marginHorizontal: 40 }}>
				{/* title */}
				<Layout style={{ paddingTop: height * 0.3 }}>
					<Text category='h1'>Create Account</Text>
					<Text category='p2'>Please create an account to continue</Text>
				</Layout>

				{/* input */}
				<Layout style={{ marginTop: 20 }}>
					<Input
						accessoryLeft={<CustomIcon name='person-outline' />}
						placeholder='Full Name'
						style={{ marginBottom: 10 }}
						autoCapitalize='words'
						value={form.fullname}
						onChangeText={(fullname) => setForm({ ...form, fullname })}
					/>
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
						onPress={onRegister}
					>
						Sign up
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
					<Text>Already have an account?</Text>
					<Text
						status='primary'
						category='s1'
						onPress={() => navigation.goBack()}
					>
						{' '}
						Login
					</Text>
				</Layout>
			</ScrollView>
		</Layout>
	)
}
