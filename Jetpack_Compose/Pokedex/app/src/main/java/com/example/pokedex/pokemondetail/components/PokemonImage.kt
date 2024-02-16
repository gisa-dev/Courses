package com.example.pokedex.pokemondetail.components

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.size
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.scale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.Dp
import coil.compose.SubcomposeAsyncImage
import coil.compose.SubcomposeAsyncImageContent
import coil.request.ImageRequest
import com.example.pokedex.data.remote.Pokemon
import com.example.pokedex.util.Resource

@Composable
fun PokemonImage(
    topPadding: Dp,
    pokemonInfo: Resource<Pokemon>,
    imageUrl: String,
    pokemonImageSize: Dp,
) {
    Box(
        contentAlignment = Alignment.TopCenter,
        modifier = Modifier.fillMaxSize()
    ) {

        if (pokemonInfo is Resource.Success) {
            pokemonInfo.data?.sprites?.let {
                SubcomposeAsyncImage(
                    model = ImageRequest.Builder(LocalContext.current)
                        .data(imageUrl)
                        .crossfade(true)
                        .build(),
                    contentDescription = pokemonInfo.data.name,
                    modifier = Modifier
                        .size(pokemonImageSize)
                        .offset(y = topPadding)
                        .align(Alignment.TopCenter),
                    loading = {
                        CircularProgressIndicator(
                            color = MaterialTheme.colorScheme.primary, modifier = Modifier.scale(0.5F)
                        )
                    },
                    success = {
                        SubcomposeAsyncImageContent()
                    }
                )
            }
        }

    }
}