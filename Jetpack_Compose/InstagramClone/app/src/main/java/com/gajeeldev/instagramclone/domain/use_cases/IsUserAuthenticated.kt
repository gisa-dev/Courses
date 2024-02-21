package com.gajeeldev.instagramclone.domain.use_cases

import com.gajeeldev.instagramclone.domain.repository.AuthenticationRepository
import javax.inject.Inject
class IsUserAuthenticated @Inject constructor(
    private val repository: AuthenticationRepository
) {
    operator fun invoke() = repository.isUserAuthenticatedIntoFirebase()
}