<template>
  <div class="">
    <!-- header  -->
    <div class="bg-cyan-300 p-4 flex justify-between items-center">
      <h1 class="font-bold font-mono text-3xl">Pokemons-Pokedox</h1>
      <div>
        <div>
          <input
            class="rounded border-solid font-mono text-center border-2 border-sky-500"
            v-model="searchName"
            type="text"
            placeholder="Search Pokemon here"
          />
        </div>
      </div>
    </div>
    <!-- pokemons  -->
    <div class="pb-12">
      <div
        v-if="pokemons.length > 0"
        class="bg-cyan-300 grid grid-cols-2 md:grid-cols-5 gap-2"
      >
        <div
          v-for="(p, i) in pokemons"
          :key="i"
          class="text-center bg-orange-50 tracking-wide font-mono border-2 border-blue-400 rounded-xl text-black"
        >
          <RouterLink :to="'/pokemon/' + p.name">
            <div>{{ p.name }}</div>
            <div>
              <img :src="p.imgUrl" alt="" class="w-full h-full" />
            </div>
          </RouterLink>
        </div>
      </div>
      <div v-else>pokemon not found</div>
    </div>
    <!-- footer  -->
    <div
      class="bg-cyan-400 flex justify-between items-center px-4 fixed bottom-0 w-full p-2"
    >
      <Icon
        @click="pagination.offset -= 1"
        class="bg-black text-white p-2"
        icon="arrow-left-long"
      >
      </Icon>

      <div class="font-mono font-semibold">
        Page: {{ pagination.offset + 1 }}
      </div>

      <Icon
        @click="pagination.offset += 1"
        class="bg-black text-white p-2"
        icon="arrow-right-long"
      >
      </Icon>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { onMounted, watch, watchEffect } from "@vue/runtime-core";
import { RouterLink } from "vue-router";

const pokemons = ref([]);
const searchName = ref("");

const pagination = reactive({
  limit: 10,
  offset: 0,
});

async function getPokemons(pagination = {}) {
  const { limit = 10, offset = 0 } = pagination;
  try {
    const results = [];
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const pageData = await res.json();
    const pokemonList = pageData.results.filter((p) => p.name);

    for (let p of pokemonList) {
      const name = p.name;
      try {
        const res = await fetch(p.url);
        const data = await res.json();
        const sprites = data.sprites;
        const imgUrl = sprites.front_default;
        results.push({
          name,
          imgUrl,
        });
      } catch (error) {
        console.log(error);
      }
    }
    return results;
  } catch (error) {
    console.log(error);
  }
}

async function getPokemon(name) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    const imgUrl = data.sprites.front_default;
    return { name, imgUrl };
  } catch (error) {
    console.log("pokemon not found");
    return null;
  }
}

watchEffect(async () => {
  if (searchName.value) {
    const pokemon = await getPokemon(searchName.value);
    pokemons.value = pokemon ? [pokemon] : [];
  } else {
    pokemons.value = await getPokemons({ ...pagination });
  }
});
</script>
