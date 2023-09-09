import { createContext, useEffect, useState } from 'react';
import {
	PermissionStatus,
	requestForegroundPermissionsAsync,
	getForegroundPermissionsAsync,
} from 'expo-location';
import * as Linking from 'expo-linking';
import { AppState } from 'react-native';

export interface PermissionsState {
	locationStatus: PermissionStatus;
}

export const permissionInitState: PermissionsState = {
	locationStatus: PermissionStatus.UNDETERMINED,
};

type PermissionsContextProps = {
	permissions: PermissionsState;
	askLoacationPermissions: () => void;
	checkLoacationPermissions: () => void;
};

export const PermissionsContext = createContext({} as PermissionsContextProps);

export const PermissionsProvider = ({ children }: any) => {
	const [permissions, setPermissions] = useState(permissionInitState);

	useEffect(() => {
		checkLoacationPermissions();

		AppState.addEventListener('change', (state) => {
			if (state !== 'active') return;
			checkLoacationPermissions();
		});
	}, []);

	const askLoacationPermissions = async () => {
		const permissionStatus = await requestForegroundPermissionsAsync();

		if (permissionStatus.status === PermissionStatus.DENIED) {
			Linking.openSettings();
		}

		setPermissions({ ...permissions, locationStatus: permissionStatus.status });
	};
	const checkLoacationPermissions = async () => {
		const permissionStatus = await getForegroundPermissionsAsync();

		setPermissions({ ...permissions, locationStatus: permissionStatus.status });
	};

	return (
		<PermissionsContext.Provider
			value={{
				permissions,
				askLoacationPermissions,
				checkLoacationPermissions,
			}}
		>
			{children}
		</PermissionsContext.Provider>
	);
};
