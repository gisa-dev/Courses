package com.example.exerciseandroid.exercises

/*
* Resultado:
*  You have 51 notifications
*  You phone is blowing up! You Have 99+ notifications.
* */

fun main() {
    val morningNotification = 51
    val eveningNotification = 135

    printNotificationSummary(morningNotification)
    printNotificationSummary(eveningNotification)


}

fun printNotificationSummary(numberOfMessages: Int) {

    if (numberOfMessages >= 100) {
        println("You phone is blowing up! You Have 99+ notifications.")
    } else {
        println("You have $numberOfMessages notifications")
    }

}