import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> {}

const PageThreeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PageThreeScreen</Text>

      <Button
      title='Return'
      onPress={() => navigation.pop()}
      
      />

      <Button
      title='Go to PageOne'
      onPress={() => navigation.popToTop()}
      
      />
    </View>
  )
}

export default PageThreeScreen