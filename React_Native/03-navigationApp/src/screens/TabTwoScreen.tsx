import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const TabTwoScreen = () => {

  useEffect(() => {
		console.log('TabTwoScreen');
	}, []);

  return (
    <View>
      <Text>TabTwoScreen</Text>
    </View>
  )
}

export default TabTwoScreen