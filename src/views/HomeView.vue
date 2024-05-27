<script setup>
import { useRouter, RouterLink } from "vue-router";
const routes = window.WORKS_ROUTES;
console.log(routes);
</script>

<template>
  <main>
    <ul>
      <li v-for="(r, i) in routes" :key="i">
        <RouterLink :to="r.path">{{ r.name }}</RouterLink>
      </li>
    </ul>
  </main>
</template>
