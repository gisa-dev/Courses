import { useRef, useState } from "react";

enum Operations {
	ADDITION,
	SUBTRACTION,
	MULTIPLICATION,
	DIVISION,
}

export const useCalculator = () => {
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

	const calculate = () => {
		const num1 = Number(number);
		const num2 = Number(prevNumber);

		if (num1 === 0 && num2 === 0) {
			return setNumber('0');
		}
		if (num1 && !num2) {
			return setNumber(`${num1}`);
		}

		switch (lastOperation.current) {
			case Operations.ADDITION:
				setNumber(`${num2 + num1}`);
				break;
			case Operations.SUBTRACTION:
				setNumber(`${num2 - num1}`);
				break;
			case Operations.MULTIPLICATION:
				setNumber(`${num2 * num1}`);
				break;
			case Operations.DIVISION:
				setNumber(`${num2 / num1}`);
				break;
		}
		
		setPrevNumber('0');
	};

  return {
    clear,
    buildNumber,
    positiveNegative,
    btnDelete,
    btnDivision,
    btnMultiplication,
    btnSubtraction,
    btnAddition,
    calculate,
    number,
    prevNumber,
  }
}