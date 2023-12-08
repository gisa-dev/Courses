fun main() {
    val numerosLoteria = listOf(11, 22, 43, 56, 78, 66)

    val numerosSorted = numerosLoteria.sorted()
    println(numerosSorted)

    val numerosLoteriaDescendientes = numerosLoteria.sortedDescending()
    println(numerosLoteriaDescendientes)

    val ordenarPorMultiplos = numerosLoteria.sortedBy { numero ->
        numero < 50
    }
    println(ordenarPorMultiplos)

    val numerosAleatorios = numerosLoteria.shuffled()
    println(numerosAleatorios)

    val numerosReversa = numerosLoteria.reversed()
    println(numerosReversa)

    val mensajesNumeros = numerosLoteria.map { numero ->
        "Tu numero de loteria es $numero \n"
    }

    println(mensajesNumeros)

    val numerosFiltrados = numerosLoteria.filter { numero -> numero > 50 }
    println(numerosFiltrados)
}