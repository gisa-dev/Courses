fun main() {
    val fraseAleatorio = "En Platzi nunca paramos de aprender".randomCase()
//    println(randomCase(fraseAleatorio))
    imprimirFrase(fraseAleatorio)
}


fun imprimirFrase(frase: String):Unit {
    println("Tu frase es: $frase")
}

// funcion de extencion
fun String.randomCase() : String {
    val numeroAleatorio = 0..99
    val resultadoAleatorio = numeroAleatorio.random()

    return if (resultadoAleatorio.rem(2) == 0) {
        this.uppercase()
    } else {
        this.lowercase()
    }
}