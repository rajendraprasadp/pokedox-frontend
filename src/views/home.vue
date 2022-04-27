<template>
  <div>
    <div class="bg-cyan-300 h-10">
      <Icon
        @click="showMenu = !showMenu"
        class="float-right p-2 text-black text-2xl"
        icon="bars"
      ></Icon>
    </div>

    <div v-if="showMenu" class="bg-gray-900 w-full p-5 fixed flex text-white">
      <div class="">
        <RouterLink :to="'/pokemons/'" class="font-bold m-2 block"
          >Pokemons/Pokedox</RouterLink
        >
        <a
          href="https://pokeapi.co/docs/v2"
          target="_blank"
          class="font-bold m-2 block"
          >Pokemon API</a
        >
      </div>
    </div>

    <div className="text-center text-xl py-10 font-mono  pt-30 ">
      <h1 className="text-4xl font-semibold text-cyan-300">
        PW FRONTEND ASSSIGNMENT
      </h1>
      <div className="p-4">
        1. Main Page : Get a List of Pokemons. Add Pagination referring to
        original docs.
      </div>
      <div className="p-4">
        2. Pokemon Page: opens via clicking on respective pokemon.
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { onMounted, watch, watchEffect } from "@vue/runtime-core";
import { RouterLink } from "vue-router";

const showMenu = ref(false);
</script>
