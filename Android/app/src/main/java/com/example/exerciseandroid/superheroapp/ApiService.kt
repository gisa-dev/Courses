package com.example.exerciseandroid.superheroapp

import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Path

interface ApiService {
    @GET("/api/122118162020126243/search/{name}")
    suspend fun getSuperHeroList(@Path("name") name: String): Response<SuperHeroDataResponse>

    @GET("/api/122118162020126243/{id}")
    suspend fun getSuperHeroInfo(@Path("id") id: String): Response<SuperHeroDetailResponse>
}