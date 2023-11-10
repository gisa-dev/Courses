<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions';

console.log(getPokemonOptions());

export default {
  components:{
    PokemonPicture,
    PokemonOptions
  }
};
</script>

<template>
	<h1>Who's That Pokémon?</h1>
  <PokemonPicture :pokemonId="7" :showPokemon="true"/>
  <PokemonOptions/>
</template>
