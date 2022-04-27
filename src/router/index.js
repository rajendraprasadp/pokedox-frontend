import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Pokemons from "../views/pokemons.vue";
import Pokemon from "../views/pokemon.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/pokemons",
      name: "Pokemons",
      component: Pokemons,
    },
    {
      path: "/pokemon/:name",
      name: "pokemon",
      component: Pokemon,
    },
  ],
});

export default router;
