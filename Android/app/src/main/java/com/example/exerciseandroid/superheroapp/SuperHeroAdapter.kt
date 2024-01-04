package com.example.exerciseandroid.superheroapp

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.exerciseandroid.R

class SuperHeroAdapter(var superHeroList: List<SuperHeroItemResponse> = emptyList()) :
    RecyclerView.Adapter<SuperHeroViewHolder>() {

    fun updateList(newList: List<SuperHeroItemResponse>) {
        superHeroList = newList
        notifyDataSetChanged()
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): SuperHeroViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        return SuperHeroViewHolder(layoutInflater.inflate(R.layout.item_superhero, parent, false))
    }

    override fun onBindViewHolder(holder: SuperHeroViewHolder, position: Int) {
        val item = superHeroList[position]
        holder.bind(item)
    }

    override fun getItemCount(): Int = superHeroList.size
}