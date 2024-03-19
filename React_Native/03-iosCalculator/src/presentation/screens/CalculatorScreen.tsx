import {Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../config/theme/appTheme';
import {CalculatorButton} from '../components/CalculatorButton';
import {buttons} from '../../data/buttons';

const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>

      <View style={globalStyles.row}>
        {buttons.map((button, index) => (
          <CalculatorButton
            key={index}
            label={button.label}
            color={button.color}
            doubleSize={button.doubleSize}
            blackText={button.blackText}
            onPress={button.onPress}
          />
        ))}
      </View>
    </View>
  );
};

export default CalculatorScreen;
