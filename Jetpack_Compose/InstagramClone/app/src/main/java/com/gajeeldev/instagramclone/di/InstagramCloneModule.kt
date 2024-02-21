package com.gajeeldev.instagramclone.di

import com.gajeeldev.instagramclone.data.AuthenticationRepositoryImpl
import com.gajeeldev.instagramclone.domain.repository.AuthenticationRepository
import com.gajeeldev.instagramclone.domain.use_cases.AuthenticationUseCases
import com.gajeeldev.instagramclone.domain.use_cases.FirebaseAuthState
import com.gajeeldev.instagramclone.domain.use_cases.FirebaseSignIn
import com.gajeeldev.instagramclone.domain.use_cases.FirebaseSignOut
import com.gajeeldev.instagramclone.domain.use_cases.FirebaseSignUp
import com.gajeeldev.instagramclone.domain.use_cases.IsUserAuthenticated
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.storage.FirebaseStorage
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object InstagramCloneModule {

    @Singleton
    @Provides
    fun provideFirebaseAuthentication(): FirebaseAuth {
        return FirebaseAuth.getInstance()
    }

    @Singleton
    @Provides
    fun provideFirebaseFirestore(): FirebaseFirestore {
        return FirebaseFirestore.getInstance()
    }

    @Singleton
    @Provides
    fun provideFirebaseStorage(): FirebaseStorage {
        return FirebaseStorage.getInstance()
    }

    @Singleton
    @Provides
    fun provideAuthenticationRepository(
        auth: FirebaseAuth,
        firestore: FirebaseFirestore
    ): AuthenticationRepository {
        return AuthenticationRepositoryImpl(auth, firestore)
    }

    @Singleton
    @Provides
    fun provideAuthUseCase(repository: AuthenticationRepository) = AuthenticationUseCases(
        isUserAuthenticated = IsUserAuthenticated(repository = repository),
        firebaseAuthState = FirebaseAuthState(repository = repository),
        firebaseSignIn = FirebaseSignIn(repository = repository),
        firebaseSignUp = FirebaseSignUp(repository = repository),
        firebaseSignOut = FirebaseSignOut(repository = repository)
    )
}