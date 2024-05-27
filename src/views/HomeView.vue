<script setup>
import { useRouter, RouterLink } from "vue-router";
const routes = useRouter().options.routes;
console.log(routes);
</script>

<template>
  <main>
    <h2>目录：</h2>
    <ul>
      <li v-for="(r, i) in routes" :key="i">
        <RouterLink :to="r.path">{{ r.name }}</RouterLink>
      </li>
    </ul>
  </main>
</template>
