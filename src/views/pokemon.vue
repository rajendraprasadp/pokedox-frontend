<template>
  <div class="bg-gray-900">
    <div class="text-center font-mono text-xl text-white">
      Pokemon Detail page
    </div>
    <div class="flex flex-col items-center justify-center">
      <img
        class="bg-cyan-300 w-50 h-50 mb-10 mt-10 rounded-full align-center"
        :src="pokemon.imgUrl"
        alt=""
      />
      <div class="text-cyan-100 font-mono">
        <div class="h-8">NAME: {{ pokemon.name }}</div>
        <div class="h-8">BASE EXPERIENCE: {{ pokemon.baseExperience }}</div>
        <div class="h-8">HEIGHT: {{ pokemon.height }}</div>
        <div class="h-8">WEIGHT: {{ pokemon.weight }}</div>
        <div class="h-8">ABILITIES: {{ pokemon.abilities }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const route = useRoute();

const pokemon = ref({});

async function getPokemon(name) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    const pok = {
      name: data.name,
      baseExperience: data.base_experience,
      height: data.height,
      weight: data.weight,
      abilities: data.abilities.map((a) => a.ability.name).join(","),
      imgUrl: data.sprites.front_default,
    };

    pokemon.value = pok;
  } catch (error) {
    console.log("pokemon not found");
    pokemon.value = {};
  }
}

onMounted(() => {
  if (route.params.name) {
    getPokemon(route.params.name);
  }
});
</script>
