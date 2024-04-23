import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../config/theme/globalStyles';
import {usePermissionStore} from '../../store/permissions/usePermissionStore';

export const PermissionsScreen = () => {
  const locationStatus = usePermissionStore(state => state.locationStatus);
  const requestLocationPermission = usePermissionStore(
    state => state.requestLocationPermission,
  );
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>Enable Location</Text>
      <Pressable
        onPress={requestLocationPermission}
        style={globalStyles.btnPrimary}>
        <Text style={{color: 'white'}}>Enable Location</Text>
      </Pressable>

      <Text>Current state: {locationStatus}</Text>
    </View>
  );
};
