import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const TabThreeScreen = () => {
  
  useEffect(() => {
		console.log('TabThreeScreen');
	}, []);

  return (
    <View>
      <Text>TabThreeScreen</Text>
    </View>
  )
}

export default TabThreeScreen