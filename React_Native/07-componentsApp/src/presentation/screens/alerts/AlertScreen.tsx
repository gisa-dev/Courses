import {Alert, View} from 'react-native';
import React from 'react';
import {Button, CustomView, Title} from '../../components';
import {globalStyles} from '../../../config/theme/theme';
import {showPrompt} from '../../../config/adapters/prompt.adapter';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const onShowPrompt = () => {
    showPrompt({
      title: 'asdasdasdasdasd',
      subTitle: 'sadasdsadasdczxczxc',
      buttons: [
        {
          text: 'ok',
          onPress: () => console.log('ok'),
        },
      ],
      promptType: 'plain-text',
      placeholder: 'asdas',
    });
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alerts" />

      <Button text="Alert - 2 Buttons" onPress={createTwoButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Alert - 3 Buttons" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Prompt" onPress={onShowPrompt} />
    </CustomView>
  );
};
