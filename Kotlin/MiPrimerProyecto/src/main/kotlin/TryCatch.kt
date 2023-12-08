import java.lang.NullPointerException

fun main() {
    var nombre: String? = null

    try {
        throw NullPointerException("Referencia nula")
    } catch (exepcion: NullPointerException) {
        println("Ha ocurrido un error")
    } finally {
        println("Finalmente ha ocurrido un error cerrando app")
    }

    val primerValor = 0
    val segundoValor = 10
    val resultado: Int = try {
        primerValor / segundoValor
    } catch (exeption: Exception) {
        0
    }

    println(resultado)
}