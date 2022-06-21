import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';

const CalculatorScreen = () => {
	return (
		<View style={styles.calculatorContainer}>
			<Text style={styles.smallResult}>1,500.00</Text>
			<Text style={styles.result}>1,500.00</Text>

			{/* row buttons */}
			<View style={styles.row}>
				<ButtonCalc text="C" color="#9B9B9B" />
				<ButtonCalc text="+/-" color="#9B9B9B" />
				<ButtonCalc text="del" color="#9B9B9B" />
				<ButtonCalc text="/" color="#FF9427" />
			</View>

			{/* row buttons */}
			<View style={styles.row}>
				<ButtonCalc text="7" />
				<ButtonCalc text="8" />
				<ButtonCalc text="9" />
				<ButtonCalc text="x" color="#FF9427" />
			</View>

			{/* row buttons */}
			<View style={styles.row}>
				<ButtonCalc text="4" />
				<ButtonCalc text="5" />
				<ButtonCalc text="6" />
				<ButtonCalc text="-" color="#FF9427" />
			</View>

			{/* row buttons */}
			<View style={styles.row}>
				<ButtonCalc text="1" />
				<ButtonCalc text="2" />
				<ButtonCalc text="3" />
				<ButtonCalc text="+" color="#FF9427" />
			</View>

			{/* row buttons */}
			<View style={styles.row}>
				<ButtonCalc text="0"  />
				<ButtonCalc text="." />
				<ButtonCalc text="=" color="#FF9427" />
			</View>
		</View>
	);
};

export default CalculatorScreen;
