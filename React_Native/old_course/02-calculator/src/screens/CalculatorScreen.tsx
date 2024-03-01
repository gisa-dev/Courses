import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';
import {useCalculator} from '../hook/useCalculator';

const CalculatorScreen = () => {
	const {
		number,
		prevNumber,
		clear,
		buildNumber,
		positiveNegative,
		btnDelete,
		btnAddition,
		btnSubtraction,
		btnMultiplication,
		btnDivision,
		calculate,
	} = useCalculator();

	return (
		<View style={styles.calculatorContainer}>
			{prevNumber !== '0' && (
				<Text style={styles.smallResult}>{prevNumber}</Text>
			)}
			<Text numberOfLines={1} adjustsFontSizeToFit style={styles.result}>
				{number}
			</Text>

			{/* row buttons */}
			<View style={styles.row}>
				<ButtonCalc text="C" color="#9B9B9B" action={clear} />
				<ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
				<ButtonCalc text="del" color="#9B9B9B" action={btnDelete} />
				<ButtonCalc text="/" color="#FF9427" action={btnDivision} />
			</View>

			{/* row buttons */}
			<View style={styles.row}>
				<ButtonCalc text="7" action={buildNumber} />
				<ButtonCalc text="8" action={buildNumber} />
				<ButtonCalc text="9" action={buildNumber} />
				<ButtonCalc text="x" color="#FF9427" action={btnMultiplication} />
			</View>

			{/* row buttons */}
			<View style={styles.row}>
				<ButtonCalc text="4" action={buildNumber} />
				<ButtonCalc text="5" action={buildNumber} />
				<ButtonCalc text="6" action={buildNumber} />
				<ButtonCalc text="-" color="#FF9427" action={btnSubtraction} />
			</View>

			{/* row buttons */}
			<View style={styles.row}>
				<ButtonCalc text="1" action={buildNumber} />
				<ButtonCalc text="2" action={buildNumber} />
				<ButtonCalc text="3" action={buildNumber} />
				<ButtonCalc text="+" color="#FF9427" action={btnAddition} />
			</View>

			{/* row buttons */}
			<View style={styles.row}>
				<ButtonCalc text="0" action={buildNumber} width />
				<ButtonCalc text="." action={buildNumber} />
				<ButtonCalc text="=" color="#FF9427" action={calculate} />
			</View>
		</View>
	);
};

export default CalculatorScreen;
