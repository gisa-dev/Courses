fun main(args: Array<String>) {

    val largoValorInicial = superFuncion(valorInicial = "Hola", block = { valor ->
        valor.length
    })
    println(largoValorInicial)

    val lambda = funcionInception("Mario")
    val valorLambda = lambda()
    println(valorLambda)
}


fun superFuncion(valorInicial: String, block: (String) -> Int): Int {
    return block(valorInicial)
}

fun funcionInception(nombre: String): () -> String {
    return {
        "Hola desde la lambda $nombre"
    }
}

