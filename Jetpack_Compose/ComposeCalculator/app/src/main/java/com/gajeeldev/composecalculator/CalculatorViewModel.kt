package com.gajeeldev.composecalculator

import androidx.compose.runtime.*
import androidx.lifecycle.ViewModel

class CalculatorViewModel : ViewModel() {
    var state by mutableStateOf(CalculatorState())
        private set

    fun onAction(action: CalculatorAction) {
        when (action) {
            is CalculatorAction.Number -> enterNumber(action.number)
            is CalculatorAction.Decimal -> enterDecimal()
            is CalculatorAction.Clear -> state = CalculatorState()
            is CalculatorAction.Delete -> performDelete()
            is CalculatorAction.Operation -> enterOperation(action.operation)
            is CalculatorAction.Calculate -> performCalculation()
        }
    }

    companion object {
        private const val MAX_NUM_LENGTH = 8
    }

    private fun enterNumber(number: Int) {
        if (state.operation == null) {

            if (state.number1.length >= MAX_NUM_LENGTH) {
                return
            }

            state = state.copy(
                number1 = state.number1 + number
            )
            return
        }


        if (state.number2.length >= MAX_NUM_LENGTH) {
            return
        }
        state = state.copy(
            number2 = state.number2 + number
        )
    }

    private fun enterDecimal() {
        if (state.operation == null &&
            !state.number1.contains(".") &&
            state.number1.isNotBlank()
        ) {

            state = state.copy(number1 = state.number1 + ".")
            return
        }


        if (!state.number2.contains(".") && state.number2.isNotBlank()) {
            state = state.copy(number2 = state.number2 + ".")

        }
    }

    private fun performDelete() {
        when {
            state.number2.isNotBlank() -> state = state.copy(number2 = state.number2.dropLast(1))
            state.operation != null -> state = state.copy(operation = null)
            state.number1.isNotBlank() -> state = state.copy(number1 = state.number1.dropLast(1))
        }
    }

    private fun enterOperation(operation: CalculatorOperation) {

        if (state.number1.isNotBlank()) {
            state = state.copy(operation = operation)
        }

    }

    private fun performCalculation() {

        val number1 = state.number1.toDoubleOrNull()
        val number2 = state.number2.toDoubleOrNull()

        if (number1 != null && number2 != null) {
            val result = when(state.operation) {
                is CalculatorOperation.Add -> number1.plus(number2)
                is CalculatorOperation.Subtract -> number1.minus(number2)
                is CalculatorOperation.Multiply -> number1.times(number2)
                is CalculatorOperation.Divide -> number1.div(number2)
                null -> return
            }

            state = state.copy(
                number1 = result.toString().take(15),
                number2 = "",
                operation = null
            )
        }


    }
}