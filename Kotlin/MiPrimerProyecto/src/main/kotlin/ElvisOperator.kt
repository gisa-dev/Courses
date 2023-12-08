fun main() {
    val nombre = "Maria"
    val caracterDeNombre: Int = nombre?.length ?: 0
    println(caracterDeNombre)
}