package com.example.pokedex

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.graphics.Color
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.example.pokedex.pokemondetail.PokemonDetailScreen
import com.example.pokedex.pokemonlist.PokemonListScreen
import com.example.pokedex.ui.theme.PokedexTheme
import com.example.pokedex.util.Constants.POKEMON_DETAIL_SCREEN
import com.example.pokedex.util.Constants.POKEMON_LIST_SCREEN
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            PokedexTheme {
                Pokedex()
            }
        }
    }
}

@Composable
fun Pokedex() {

    val navController = rememberNavController()

    NavHost(
        navController = navController,
        startDestination = POKEMON_LIST_SCREEN
    ) {

        composable(POKEMON_LIST_SCREEN) {
            PokemonListScreen(navController = navController)
        }

        composable(
            "${POKEMON_DETAIL_SCREEN}/{dominantColor}/{pokemonName}",
            arguments = listOf(
                navArgument("dominantColor") {
                    type = NavType.IntType
                },
                navArgument("pokemonName") {
                    type = NavType.StringType
                }
            )
        ) {
            val dominantColor = remember {
                val color = it.arguments?.getInt("dominantColor")
                color?.let { Color(it) } ?: Color.White
            }
            val pokemonName = remember {
                it.arguments?.getString("pokemonName")
            }

            PokemonDetailScreen(
                dominantColor = dominantColor,
                pokemonName = pokemonName?.lowercase() ?: "",
                navController = navController
            )

        }
    }
}

