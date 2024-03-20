import {Text, View} from 'react-native';
import React from 'react';
import {colors, globalStyles} from '../../config/theme/appTheme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    formula,
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divideOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.mainResult}>
          {formula}
        </Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.subResult}>
          {prevNumber === '0' ? ' ' : prevNumber}
        </Text>
      </View>

      {/* row 1 */}
      <View style={globalStyles.row}>
        <CalculatorButton
          blackText
          color={colors.lightGray}
          label="C"
          onPress={clean}
        />
        <CalculatorButton
          blackText
          color={colors.lightGray}
          label="+/-"
          onPress={toggleSign}
        />
        <CalculatorButton
          blackText
          color={colors.lightGray}
          label="del"
          onPress={deleteOperation}
        />
        <CalculatorButton
          color={colors.orange}
          label="÷"
          onPress={divideOperation}
        />
      </View>

      {/* row 2 */}
      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => buildNumber('7')} />
        <CalculatorButton label="8" onPress={() => buildNumber('8')} />
        <CalculatorButton label="9" onPress={() => buildNumber('9')} />
        <CalculatorButton
          color={colors.orange}
          label="x"
          onPress={multiplyOperation}
        />
      </View>

      {/* row 3 */}
      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => buildNumber('4')} />
        <CalculatorButton label="5" onPress={() => buildNumber('5')} />
        <CalculatorButton label="6" onPress={() => buildNumber('6')} />
        <CalculatorButton
          color={colors.orange}
          label="-"
          onPress={subtractOperation}
        />
      </View>

      {/* row 4 */}
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => buildNumber('1')} />
        <CalculatorButton label="2" onPress={() => buildNumber('2')} />
        <CalculatorButton label="3" onPress={() => buildNumber('3')} />
        <CalculatorButton
          color={colors.orange}
          label="+"
          onPress={addOperation}
        />
      </View>

      {/* row 5 */}
      <View style={globalStyles.row}>
        <CalculatorButton
          doubleSize
          label="0"
          onPress={() => buildNumber('0')}
        />
        <CalculatorButton label="." onPress={() => buildNumber('.')} />
        <CalculatorButton label="=" onPress={calculateResult} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
