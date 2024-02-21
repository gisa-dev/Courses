package com.gajeeldev.instagramclone.domain.model

data class User(
    var name: String = "",
    var userName: String = "",
    var userId: String = "",
    var email: String = "",
    var password: String = "",
    var imageUrl: String = "",
    var bio: String = "",
    var url: String = "",
    var totalPosts: String = "",
    var following: List<String> = emptyList(),
    var followers: List<String> = emptyList()

)
