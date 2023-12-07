import java.lang.NullPointerException

const val PI = 3.1416

fun main(args: Array<String>) {
    /*  var dinero = 10
      println(dinero)
      dinero = 5
      println(dinero)

      val name = "Maria"

      println(name)
      println(PI)

      val boolean = true
      val numeroLargo = 5L
      val double = 2.15
      val float = 5f

      val primerValor = 20
      val segundoValor = 10
      val tercerValor = primerValor - segundoValor
      println(tercerValor)

      val nombre = "Gilberto"
      val apellido = "Acosta"
      val nombreCompleto = "Mi nombre es $nombre y mi apellido es $apellido"
      println(nombreCompleto)

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


    var contador = 10

    while (contador > 0) {
        println("El valor de contador es $contador")
        contador--
    }
    println("---------------------------------------------------------------")

    do {
        println("Generando numero aleatorio...")
        val numeroAleatorio = (0..100).random()
        println("El numero generado es $numeroAleatorio")
    } while (numeroAleatorio > 50)


    val listaDeFrutas = listOf("Manzana", "Pera", "Limon", "Melon")

    for (fruta in listaDeFrutas) {
        println("Hoy voy a comerme una fruta que se llama $fruta")
    }
    println("---------------------------------------------------------------")
    listaDeFrutas.forEach {
        fruta -> println("Hoy voy a comerme una fruta nueva se llama $fruta")
    }
    println("---------------------------------------------------------------")
    val caracteresDeFruta = listaDeFrutas.map { fruta -> fruta.length }
    println(caracteresDeFruta)

    println("---------------------------------------------------------------")
    val listaFiltrada = caracteresDeFruta.filter { caracteresFruta -> caracteresFruta > 5 }

    println(listaFiltrada)



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

     */

    var nombre: String? = null

    val caracterDeNombre: Int = nombre?.length ?: 0
    println(caracterDeNombre)
}