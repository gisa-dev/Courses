import React, {useState} from 'react';
import {Button, CustomView, Title} from '../../components';
import {Modal, Platform, View} from 'react-native';
import {useThemeContext} from '../../hooks/useThemeContext';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {colors} = useThemeContext();

  return (
    <CustomView margin>
      <Title text="Modal" safe />

      <Button text="Abrir Modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View
          style={{
            flex: 1,
            backgroundColor: colors.cardBackground,
          }}>
          <View style={{paddingHorizontal: 10}}>
            <Title text="Modal Content" safe />
          </View>

          <View style={{flex: 1}} />

          <Button
            text="Cerrar Modal"
            onPress={() => setIsVisible(false)}
            style={{
              height: Platform.OS === 'android' ? 40 : 60,
              borderRadius: 0,
            }}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
