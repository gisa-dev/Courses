package com.example.exerciseandroid.superheroapp

import android.view.View
import androidx.recyclerview.widget.RecyclerView
import com.example.exerciseandroid.databinding.ItemSuperheroBinding
import com.squareup.picasso.Picasso

class SuperHeroViewHolder(view: View) : RecyclerView.ViewHolder(view) {

    private val binding = ItemSuperheroBinding.bind(view)

    fun bind(superHero: SuperHeroItemResponse) {
        binding.tvSuperHeroName.text = superHero.name
        Picasso.get().load(superHero.image.url).into(binding.ivSuperHero)
    }
}