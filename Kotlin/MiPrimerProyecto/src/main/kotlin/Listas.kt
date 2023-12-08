fun main() {
    val listaNombres = listOf("Juan", "Enrique", "Camila")
    println(listaNombres)

    val listaVacia = mutableListOf<String>()


    println(listaVacia)
    listaVacia.add("Jose")
    println(listaVacia)

    val valorUsandoGet = listaVacia.get(0)
    println(valorUsandoGet)

    val valorUsandoOperador = listaVacia[0]
    println(valorUsandoOperador)

    val primerValor = listaNombres.firstOrNull()
    println(primerValor)

    listaVacia.removeAt(0)
    println(listaVacia)

    listaVacia.add("Enrique")
    println(listaVacia)
    listaVacia.removeIf { caracteres ->
        caracteres.length > 3
    }
    println(listaVacia)

    val myArray = arrayOf(1,2,3,4)
    println("mi array $myArray")
    println("Array como lista ${myArray.toList()}")
}