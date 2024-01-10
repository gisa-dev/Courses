package com.example.exerciseandroid.superheroapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import androidx.appcompat.widget.SearchView
import androidx.core.view.isVisible
import androidx.recyclerview.widget.GridLayoutManager
import com.example.exerciseandroid.databinding.ActivitySuperHeroListBinding
import com.example.exerciseandroid.superheroapp.DetailSuperHeroActivity.Companion.EXTRA_ID
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class SuperHeroListActivity : AppCompatActivity() {

    private lateinit var binding: ActivitySuperHeroListBinding
    private lateinit var retrofit: Retrofit
    private lateinit var adapter: SuperHeroAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySuperHeroListBinding.inflate(layoutInflater)
        setContentView(binding.root)
        retrofit = getRetrofit()
        initUI()


    }

    private fun initUI() {
        binding.searchView.setOnQueryTextListener(object : SearchView.OnQueryTextListener {
            override fun onQueryTextSubmit(query: String?): Boolean {
                searchByName(query.orEmpty())
                return false
            }

            override fun onQueryTextChange(newText: String?) = false

        })

        adapter = SuperHeroAdapter() { id -> navigateToDetail(id) }
        binding.rvSuperHero.setHasFixedSize(true)
        binding.rvSuperHero.layoutManager = GridLayoutManager(this, 2)
        binding.rvSuperHero.adapter = adapter

    }

    private fun searchByName(query: String) {
        binding.progressBar.isVisible = true
        CoroutineScope(Dispatchers.IO).launch {
            val myResponse = retrofit.create(ApiService::class.java).getSuperHeroList(query)

            if (myResponse.isSuccessful) {
                Log.i("gisadev", "funciona :)")
                val response: SuperHeroDataResponse? = myResponse.body()
                if (response != null) {
                    Log.i("gisadev", response.toString())

                    runOnUiThread {
                        adapter.updateList(response.superHeroes)
                        binding.progressBar.isVisible = false
                    }


                }
            } else {
                Log.i("gisadev", "No funciona :(")
            }
        }


    }

    private fun getRetrofit(): Retrofit {
        return Retrofit.Builder()
            .baseUrl("https://superheroapi.com/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }

    private fun navigateToDetail(id: String) {
        val intent = Intent(this, DetailSuperHeroActivity::class.java)
        intent.putExtra(EXTRA_ID, id)
        startActivity(intent)
    }
}


