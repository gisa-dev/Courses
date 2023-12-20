package com.example.exerciseandroid.exercises.firstapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
//import android.util.Log
import androidx.appcompat.widget.AppCompatButton
import androidx.appcompat.widget.AppCompatEditText
import com.example.exerciseandroid.R

class FirstAppActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_first_app)
        val buttonStart = findViewById<AppCompatButton>(R.id.buttonStart)
        val editName = findViewById<AppCompatEditText>(R.id.editName)


        buttonStart.setOnClickListener {
            val name = editName.text.toString()

            if (name.isNotEmpty()) {

                val intent = Intent(this, ResultActivity::class.java)
                intent.putExtra("EXTRA_NAME",name)
                startActivity(intent)
            }
        }
    }
}