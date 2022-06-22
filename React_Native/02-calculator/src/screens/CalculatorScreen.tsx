import {Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from '../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';

enum Operations {
	ADDITION,
	SUBTRACTION,
	MULTIPLICATION,
	DIVISION,
}

const CalculatorScreen = () => {
	const [prevNumber, setPrevNumber] = useState('0');
	const [number, setNumber] = useState('0');

	const lastOperation = useRef<Operations>();

	const clear = () => {
		setPrevNumber('0');
		setNumber('0');
	};

	const buildNumber = (textNumber: string) => {
		// not allow to add more than one dot
		if (textNumber === '.' && number.includes('.')) return;

		if (number.startsWith('0') || number.startsWith('-0')) {
			// Punto decimal
			if (textNumber === '.') {
				setNumber(number + textNumber);

				// Evaluar si es otro cero, y hay un punto
			} else if (textNumber === '0' && number.includes('.')) {
				setNumber(number + textNumber);

				// Evaluar si es diferente de cero y no tiene un punto
			} else if (textNumber !== '0' && !number.includes('.')) {
				setNumber(textNumber);

				// Evitar 0000.0
			} else if (textNumber === '0' && !number.includes('.')) {
				setNumber(number);
			} else {
				setNumber(number + textNumber);
			}
		} else {
			setNumber(number + textNumber);
		}
	};

	const positiveNegative = () => {
		if (number.includes('-')) {
			setNumber(number.replace('-', ''));
		} else {
			setNumber('-' + number);
		}
	};

	const btnDelete = () => {
		let negative = '';
		let tempNumber = number;

		if (number.includes('-')) {
			negative = '-';
			tempNumber = number.replace('-', '');
		}

		if (tempNumber.length > 1) {
			setNumber(negative + tempNumber.slice(0, -1));
		} else {
			setNumber('0');
		}
	};

	const changePreviousNumber = () => {
		if (number.endsWith('.')) {
			setPrevNumber(number.slice(0, -1));
		} else {
			setPrevNumber(number);
		}

		setNumber('0');
	};

	const btnDivision = () => {
		changePreviousNumber();
		lastOperation.current = Operations.DIVISION;
	};
	const btnMultiplication = () => {
		changePreviousNumber();
		lastOperation.current = Operations.MULTIPLICATION;
	};
	const btnSubtraction = () => {
		changePreviousNumber();
		lastOperation.current = Operations.SUBTRACTION;
	};
	const btnAddition = () => {
		changePreviousNumber();
		lastOperation.current = Operations.ADDITION;
	};

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
				<ButtonCalc text="=" color="#FF9427" action={clear} />
			</View>
		</View>
	);
};

export default CalculatorScreen;
