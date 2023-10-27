fun main() {

    println("Hello Kotlin")


    // Variables
    var myString = "Esto es una cadena de texto"
    myString = "Aqui cambio el valor de la cadena de texto"
    println(myString)

    var myString2: String = "Esta es otra cadena de texto"
    println(myString2)

    var myInt = 7
    myInt = myInt + 3
    println(myInt)
    println(myInt - 1)
    println(myInt)

    var myInt2: Int = 7
    println(myInt2)

    var myDouble = 5.5
    println(myDouble)

    myDouble = 5.9
    println(myDouble)

    var myDouble2: Double = 3.5
    println(myDouble)
    
    var myFloat = 3.5f

    var myBool = true
    myBool = false
    println(myBool)

    // Constantes

    val myConst = "Mi propiedad contaste"


    // Control de flujo
    myInt = 10

    if (myInt == 11) {
        println("El valor es 11")
    } else if (myInt == 10) {
        println("El valor es 10")
    } else {
        println("El valor es distinto de 11 y de 10")

    }

    // Lista
    var myList = listOf<String>("ola","k","haze") // inmutable
    var myList2 = mutableListOf("ola","k","haze") // mutable

    myList2.add("hhh")

    println(myList)
    println(myList2)

    // Sets

    var mySet = setOf("ola","k","haze","ola")
    println(mySet)

    // Mapas
    var myMap = mapOf("hola" to 36)
    println(myMap)

    // Bucles

    for (value in myList) {
        println(value)
    }

    var myCounter = 0

    while (myCounter < myList.count()) {
        println(myList[myCounter])
        myCounter++
    }

    // Opcionales
    var myOptional: String? = null
    println(myOptional)
    myOptional = "mi cadena de texto opcional"

    // Funciones
    myFunction()

    // Clases
    var myClass = MyClass("Gilbert",27 )
    println(myClass.name)

}
fun myFunction() {
    println("myFunction")
}

// Clases

class  MyClass(val name: String, val age:Int)
