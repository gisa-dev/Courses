import {
	View,
	Text,
	TextInput,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
} from 'react-native';
import { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';

const TextInputScreen = () => {
	const { form, onChange,isSubscribed } = useForm({
		name: '',
		email: '',
		phonenumber: '',
		isSubscribed: false,
	});

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
		>
			<ScrollView>
				<View style={styles.globalMargin}>
					<HeaderTitle title='TextInput' />

					<TextInput
						style={stylesInput.input}
						placeholder='Enter your name'
						autoCorrect={false}
						autoCapitalize='words'
						// value={name}
						onChangeText={(value) => onChange(value, 'name')}
					/>
					<TextInput
						style={stylesInput.input}
						placeholder='Enter your email'
						autoCorrect={false}
						autoCapitalize='none'
						// value={email}
						onChangeText={(value) => onChange(value, 'email')}
						keyboardType='email-address'
					/>

					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Text>Subscribed</Text>
						<CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
					</View>

					<HeaderTitle title={JSON.stringify(form, null, 3)} />
					<HeaderTitle title={JSON.stringify(form, null, 3)} />
					<TextInput
						style={stylesInput.input}
						placeholder='Enter your phonenumber'
						// value={phonenumber}
						onChangeText={(value) => onChange(value, 'phonenumber')}
						keyboardType='phone-pad'
					/>
				</View>

				<View style={{ height: 100 }} />
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default TextInputScreen;

const stylesInput = StyleSheet.create({
	input: {
		marginVertical: 10,
		borderWidth: 1,
		borderColor: 'rgba(0, 0, 0,0.3)',
		height: 50,
		paddingHorizontal: 10,
		borderRadius: 10,
	},
});
