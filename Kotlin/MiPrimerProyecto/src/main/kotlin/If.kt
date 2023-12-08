fun main(args: Array<String>) {
    val nombreIf = "li"

    if (nombreIf.isNotEmpty()) println("El largo de nuestra variable es ${nombreIf.length}")
    else println("Error, la variable esta vacia")

    val mensaje: String = if (nombreIf.length > 4) {
        "Tu nombre es largo!"
    } else if (nombreIf.isEmpty()) {
        "El nombre esta vacio"
    } else {
        "Tienes un nombre corto"
    }
    println(mensaje)
}