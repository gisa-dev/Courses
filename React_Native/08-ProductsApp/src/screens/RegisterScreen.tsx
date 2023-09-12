import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Alert,
} from 'react-native';
import { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { loginStyles } from '../theme/loginTheme';
import WhiteLogo from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { useAuthContext } from '../context/auth/useAuthContext';

interface Props extends StackScreenProps<any, any> {}
const RegisterScreen = ({ navigation }: Props) => {
	const { signUp, removeError, errorMessage } = useAuthContext();
	const { email, password, name, onChange } = useForm({
		email: '',
		password: '',
		name: '',
	});

	useEffect(() => {
		if (errorMessage.length === 0) return;

		Alert.alert('Register Error', errorMessage, [
			{
				text: 'OK',
				onPress: removeError,
			},
		]);
	}, [errorMessage]);

	const onRegister = () => {
		signUp({ correo: email, password, nombre: name });
		Keyboard.dismiss();
	};
	return (
		<>
			<KeyboardAvoidingView
				style={{ flex: 1, backgroundColor: '#5856D6' }}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			>
				<View style={loginStyles.formContainer}>
					<WhiteLogo />
					<Text style={loginStyles.title}>Register</Text>
					<Text style={loginStyles.label}>Name:</Text>
					<TextInput
						placeholder='Enter email'
						placeholderTextColor='rgba(255,255,255,0.4)'
						underlineColorAndroid='white'
						style={loginStyles.inputField}
						selectionColor='white'
						autoCapitalize='words'
						autoCorrect={false}
						value={name}
						onChangeText={(value) => onChange(value, 'name')}
						onSubmitEditing={onRegister}
					/>
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
						onSubmitEditing={onRegister}
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
						onSubmitEditing={onRegister}
					/>
					<View style={loginStyles.buttonContainer}>
						<TouchableOpacity
							activeOpacity={0.8}
							style={loginStyles.button}
							onPress={onRegister}
						>
							<Text style={loginStyles.buttonText}>Create Account</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity
						activeOpacity={0.8}
						onPress={() => {
							navigation.replace('Login');
						}}
						style={loginStyles.buttonBack}
					>
						<Text style={loginStyles.buttonText}>Login</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default RegisterScreen;
