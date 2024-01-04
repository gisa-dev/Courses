package com.example.exerciseandroid

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import com.example.exerciseandroid.exercises.firstapp.FirstAppActivity
import com.example.exerciseandroid.imccalculator.ImcCalculatorActivity
import com.example.exerciseandroid.superheroapp.SuperHeroListActivity
import com.example.exerciseandroid.todoapp.TODOActivity

class MenuActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_menu)

        val buttonSaludApp = findViewById<Button>(R.id.buttonSaludApp)
        val buttonImcApp = findViewById<Button>(R.id.buttonIMCApp)
        val buttonTODOApp = findViewById<Button>(R.id.buttonTODOApp)
        val buttonSuperHeroApp = findViewById<Button>(R.id.buttonSuperHeroApp)

        buttonSaludApp.setOnClickListener {
            navigateToSaludApp()
        }
        buttonImcApp.setOnClickListener {
            navigateToImcApp()
        }
        buttonTODOApp.setOnClickListener {
            navigateToTODOApp()
        }
        buttonSuperHeroApp.setOnClickListener {
            navigateToSuperHeroApp()
        }
    }

    private fun navigateToSaludApp() {
        val intent = Intent(this, FirstAppActivity::class.java)
        startActivity(intent)
    }

    private fun navigateToImcApp() {
        val intent = Intent(this, ImcCalculatorActivity::class.java)
        startActivity(intent)
    }

    private fun navigateToTODOApp() {
        val intent = Intent(this, TODOActivity::class.java)
        startActivity(intent)
    }

    private fun navigateToSuperHeroApp() {
        val intent = Intent(this, SuperHeroListActivity::class.java)
        startActivity(intent)
    }
}