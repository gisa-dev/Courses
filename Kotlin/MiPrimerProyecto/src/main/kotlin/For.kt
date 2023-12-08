fun main() {
    val listaDeFrutas = listOf("Manzana", "Pera", "Limon", "Melon")

    for (fruta in listaDeFrutas) {
        println("Hoy voy a comerme una fruta que se llama $fruta")
    }
    println("---------------------------------------------------------------")
    listaDeFrutas.forEach { fruta ->
        println("Hoy voy a comerme una fruta nueva se llama $fruta")
    }
    println("---------------------------------------------------------------")
    val caracteresDeFruta = listaDeFrutas.map { fruta -> fruta.length }
    println(caracteresDeFruta)

    println("---------------------------------------------------------------")
    val listaFiltrada = caracteresDeFruta.filter { caracteresFruta -> caracteresFruta > 5 }

    println(listaFiltrada)
}