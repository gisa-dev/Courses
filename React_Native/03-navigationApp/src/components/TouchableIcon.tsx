import { TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
	iconName: keyof typeof Ionicons.glyphMap;
}

const TouchableIcon = ({ iconName }: Props) => {
	const { changeFavIcon } = useContext(AuthContext);

	return (
		<TouchableOpacity onPress={() => changeFavIcon(iconName)}>
			<Ionicons name={iconName} size={80} color={colors.primary} />
		</TouchableOpacity>
	);
};

export default TouchableIcon;
