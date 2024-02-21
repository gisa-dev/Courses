package com.gajeeldev.instagramclone.presentation

import android.view.animation.OvershootInterpolator
import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.scale
import androidx.compose.ui.res.painterResource
import androidx.navigation.NavController
import com.gajeeldev.instagramclone.R
import com.gajeeldev.instagramclone.presentation.authentication.AuthenticationViewModel

@Composable
fun SplashScreen(navController: NavController, authViewModel: AuthenticationViewModel) {

    val authValue = authViewModel.isUserAuthenticated

    val scale = remember {
        Animatable(0f)
    }
    
    LaunchedEffect(key1 = true ) {
        scale.animateTo(
            targetValue = 0.5f,
            animationSpec = tween(
                durationMillis = 1500,
                easing = {
                    OvershootInterpolator
                }
            )
        )
    }

    Box(contentAlignment = Alignment.Center, modifier = Modifier.fillMaxSize()) {
        Image(
            painter = painterResource(id = R.drawable.ic_instagram_logo),
            contentDescription = "Splash Screen",
            modifier = Modifier.scale(scale.value)
        )
    }
}