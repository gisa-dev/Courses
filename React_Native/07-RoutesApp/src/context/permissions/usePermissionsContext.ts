import { useContext } from 'react';
import { PermissionsContext } from './PermissionsContext';

export const usePermissionsContext = () => {
	const { permissions, askLoacationPermissions, checkLoacationPermissions } =
		useContext(PermissionsContext);

	return {
		permissions,
		askLoacationPermissions,
		checkLoacationPermissions,
	};
};
