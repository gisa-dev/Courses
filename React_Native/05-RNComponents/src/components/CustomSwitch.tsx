import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { useState } from 'react';
import { useThemeContext } from '../context/theme/useThemeContext';

interface Props {
	isOn: boolean;
	onChange: (value: boolean) => void;
}

const CustomSwitch = ({ isOn, onChange }: Props) => {
	const {
		theme: { colors },
	} = useThemeContext();
	const [isEnabled, setIsEnabled] = useState(isOn);
	const toggleSwitch = () => {
		setIsEnabled(!isEnabled);
    onChange(!isEnabled);
	};

	return (
		<Switch
			trackColor={{ false: '#D9D9DB', true: `${colors.primary}` }}
			thumbColor={Platform.OS === 'android' ? `${colors.primary}` : ''}
			onValueChange={toggleSwitch}
			value={isEnabled}
		/>
	);
};

export default CustomSwitch;

const styles = StyleSheet.create({});
