fun main() {
    val myLambda: (String) -> Int = { valor ->
        valor.length
    }

    val lambdaEjecutada = myLambda("Hola")

    println(lambdaEjecutada)

    val saludos = listOf("Hello", "Hola","Ciao")
    val longitudSaludos = saludos.map(myLambda)
    println(longitudSaludos)

}