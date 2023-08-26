import { View, Text, Button, Alert, Platform } from 'react-native';
import { useState } from 'react';
import Dialog from 'react-native-dialog';

import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useThemeContext } from '../context/theme/useThemeContext';

const AlertScreen = () => {
	const {
		theme: { currentTheme, colors },
	} = useThemeContext();
	const [visible, setVisible] = useState(false);
	const showAlert = () => {
		Alert.alert(
			'Hello',
			'This is the message of the alert',
			[
				{
					text: 'Cancel',
					onPress: () => {
						console.log('Cancel Pressed');
					},
					style: 'destructive',
				},
				{
					text: 'OK',
					onPress: () => {
						console.log('OK Pressed');
					},
				},
			],
			{
				cancelable: true,
				userInterfaceStyle: currentTheme,
				onDismiss: () => console.log('onDismiss Pressed'),
			},
		);
	};

	const showPrompt = () => {
		// Alert.prompt(
		// 	'Hello',
		// 	'This is the message of the prompt',
		// 	(value: string) => console.log({ value }),
		// );
	};

	const showDialog = () => {
		setVisible(true);
	};

	const handleCancel = () => {
		setVisible(false);
	};

	const handleOK = () => {
		// The user has pressed the "Delete" button, so here you can do your own logic.
		// ...Your logic
		setVisible(false);
	};

	return (
		<View style={styles.globalMargin}>
			<HeaderTitle title='Alert' />
			<View>
				<Button title='Show Alert' onPress={showAlert} />
				<View style={{ marginVertical: 10 }} />
				<Button title='Show Prompt' onPress={showDialog} />

				<Dialog.Container
					visible={visible}
					contentStyle={{
						borderRadius: 20,
					}}
				>
					<Dialog.Title>Hello</Dialog.Title>
					<Dialog.Description>This message of the prompt</Dialog.Description>
					<Dialog.Input placeholder='Enter text' />
					<Dialog.Button
						style={{ color: colors.primary }}
						label='Cancel'
						onPress={handleCancel}
					/>
					<Dialog.Button
						style={{ color: colors.primary }}
						label='OK'
						onPress={handleOK}
					/>
				</Dialog.Container>
			</View>
		</View>
	);
};

export default AlertScreen;
