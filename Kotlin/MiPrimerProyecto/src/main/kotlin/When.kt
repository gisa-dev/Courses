fun main() {
    val nombreColor = "Carmesi"

    when (nombreColor) {
        "Amarillo" -> println("El amarillo es el color de la alegria")
        "Rojo", "Carmesi" -> println("El rojo simboliza el calor")
        else -> println("Error. No tengo informacion del color")
    }

    val code = 555
    when (code) {
        in 200..299 -> println("Todo ha ido bien")
        in 400..500 -> println("Algo a fallado")
        else -> println("Codigo desconocido, algo ha fallado")
    }

    val tallaZapato = 41
    val mensaje = when (tallaZapato) {
        41, 43 -> "Tenemos disponible"
        42, 44 -> "Casi no nos quedan"
        45 -> "Lo siento no tenemos disponible"
        else -> "Estos zapatos solo vienen en tallas 41,42,43,44 y 45"
    }
    println(mensaje)
}