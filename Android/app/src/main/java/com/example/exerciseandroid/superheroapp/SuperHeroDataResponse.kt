package com.example.exerciseandroid.superheroapp

import com.google.gson.annotations.SerializedName

data class SuperHeroDataResponse(
    @SerializedName("response") val response: String,
    @SerializedName("results") val superHeroes: List<SuperHeroItemResponse>
)

data class SuperHeroItemResponse(
    @SerializedName("id") val id: String,
    @SerializedName("name") val name: String,
    @SerializedName("biography") val bio: SuperHeroBioResponse,
    @SerializedName("image") val image: SuperHeroImageResponse
)

data class SuperHeroBioResponse(
    @SerializedName("full-name") val fullName: String,
    @SerializedName("first-appearance") val firstAppearance: String,
    @SerializedName("publisher") val publisher: String
)

data class SuperHeroImageResponse(
    @SerializedName("url") val url: String
)