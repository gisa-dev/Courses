package com.example.pokedex.pokemondetail.components

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.pokedex.data.remote.Pokemon
import com.example.pokedex.util.parseStatToAbbr
import com.example.pokedex.util.parseStatToColor

@Composable
fun PokemonBaseStats(
    pokemonInfo: Pokemon,
    animDelayPerItem: Int = 100
) {

    val maxBaseStat = remember {
        pokemonInfo.stats.maxOf { it.base_stat }
    }

    Column(
        modifier = Modifier.fillMaxWidth()
    ) {

        Text(
            text = "Base Stats",
            fontSize = 20.sp,
            color = MaterialTheme.colorScheme.onSurface,
            fontWeight = FontWeight.Bold

        )

        Spacer(modifier = Modifier.height(4.dp))

        pokemonInfo.stats.forEachIndexed { index, stat ->
            PokemonStat(
                statName = parseStatToAbbr(stat),
                statValue = stat.base_stat,
                statMaxValue = maxBaseStat,
                statColor = parseStatToColor(stat),
                animDelay = index * animDelayPerItem
            )
            Spacer(modifier = Modifier.height(8.dp))
        }
    }

}