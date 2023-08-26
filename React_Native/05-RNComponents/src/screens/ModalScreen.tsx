import { View, Text, Button, Modal } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { useThemeContext } from '../context/theme/useThemeContext';

const ModalScreen = () => {
	const {
		theme: { colors },
	} = useThemeContext();
	const [isVisible, setIsVisible] = useState(false);

	return (
		<View style={styles.globalMargin}>
			<HeaderTitle title='Modal' />
			<Button title='Open Modal' onPress={() => setIsVisible(true)} />

			<Modal animationType='fade' visible={isVisible} transparent>
				<View
					style={{
						// height: 100,
						// width: 100,
						flex: 1,
						backgroundColor: 'rgba(0,0,0,0.3)',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<View
						style={{
							backgroundColor: colors.background,
							borderRadius: 20,
							width: 200,
							height: 200,
							justifyContent: 'center',
							alignItems: 'center',
							shadowOffset: {
								width: 0,
								height: 10,
							},
							shadowOpacity: 0.25,
							elevation: 10,
						}}
					>
						<Text
							style={{ fontSize: 20, fontWeight: 'bold', color: colors.text }}
						>
							Modal
						</Text>
						<Text
							style={{
								fontSize: 16,
								fontWeight: '300',
								marginBottom: 20,
								color: colors.text,
							}}
						>
							asdasdsadasdadasd
						</Text>
						<Button title='close modal' onPress={() => setIsVisible(false)} />
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default ModalScreen;
