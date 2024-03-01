import { Ionicons } from '@expo/vector-icons';
export interface MenuItem {
	name: string;
	icon: keyof typeof Ionicons.glyphMap;
	component: string;
}
