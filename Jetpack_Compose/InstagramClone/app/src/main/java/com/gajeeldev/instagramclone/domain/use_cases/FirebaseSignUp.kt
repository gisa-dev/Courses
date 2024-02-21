package com.gajeeldev.instagramclone.domain.use_cases

import com.gajeeldev.instagramclone.domain.repository.AuthenticationRepository
import javax.inject.Inject
class FirebaseSignUp @Inject constructor(
    private val repository: AuthenticationRepository
) {
    operator fun invoke(email: String, password: String, userName: String) =
        repository.firebaseSignUp(
            email = email,
            password = password,
            userName = userName
        )
}