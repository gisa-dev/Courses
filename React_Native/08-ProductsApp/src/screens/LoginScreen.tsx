import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	Alert,
} from 'react-native';
import { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Background from '../components/Background';
import WhiteLogo from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { useAuthContext } from '../context/auth/useAuthContext';

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({ navigation }: Props) => {
	const { signIn, errorMessage, removeError } = useAuthContext();
	const { email, password, onChange } = useForm({ email: '', password: '' });

	const onLogin = () => {
		signIn({ correo: email, password });
		Keyboard.dismiss();
	};

	useEffect(() => {
		if (errorMessage.length === 0) return;

		Alert.alert('Login Error', errorMessage, [
			{
				text: 'OK',
				onPress: removeError,
			},
		]);
	}, [errorMessage]);

	return (
		<>
			<Background />
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			>
				<View style={loginStyles.formContainer}>
					<WhiteLogo />
					<Text style={loginStyles.title}>Login</Text>
					<Text style={loginStyles.label}>Email:</Text>
					<TextInput
						placeholder='Enter email'
						placeholderTextColor='rgba(255,255,255,0.4)'
						keyboardType='email-address'
						underlineColorAndroid='white'
						style={loginStyles.inputField}
						selectionColor='white'
						autoCapitalize='none'
						autoCorrect={false}
						value={email}
						onChangeText={(value) => onChange(value, 'email')}
						onSubmitEditing={onLogin}
					/>
					<Text style={loginStyles.label}>Password:</Text>
					<TextInput
						placeholder='••••••••'
						placeholderTextColor='rgba(255,255,255,0.4)'
						underlineColorAndroid='white'
						style={loginStyles.inputField}
						selectionColor='white'
						autoCapitalize='none'
						autoCorrect={false}
						secureTextEntry
						value={password}
						onChangeText={(value) => onChange(value, 'password')}
						onSubmitEditing={onLogin}
					/>
					<View style={loginStyles.buttonContainer}>
						<TouchableOpacity
							activeOpacity={0.8}
							style={loginStyles.button}
							onPress={onLogin}
						>
							<Text style={loginStyles.buttonText}>Login</Text>
						</TouchableOpacity>
					</View>

					<View style={loginStyles.newUserContainer}>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								navigation.replace('Register');
							}}
						>
							<Text style={loginStyles.buttonText}>New Account</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default LoginScreen;
