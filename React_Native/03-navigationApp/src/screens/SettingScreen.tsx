import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';

const SettingScreen = () => {

  const insets = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin,marginTop: insets.top}}>
      <Text style={styles.title}>SettingScreen</Text>
    </View>
  )
}

export default SettingScreen