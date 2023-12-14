fun main() {
    var nombre: String? = null

    // solo se va a ejecutar si la variable no es nula
    nombre?.let { valor ->
        println("El nombre no es nulo, es $valor")
    }
    nombre = "Gilbert"
    nombre?.let { valor ->
        println("El nombre no es nulo, es $valor")
    }
}