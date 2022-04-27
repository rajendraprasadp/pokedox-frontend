<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <header>
      <div class="bg-black text-white h-10 px-4 pt-2">
        <Icon
          @click="$router.back()"
          class="cursor-pointer text-xl"
          icon="arrow-left-long"
        ></Icon>
      </div>
    </header>
    <RouterView />
  </div>
</template>
