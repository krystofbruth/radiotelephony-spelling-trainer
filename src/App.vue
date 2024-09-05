<template>
  <NavBar />

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>

<script setup>
import { useRoute } from "vue-router";
import NavBar from "./components/Navbar.vue";

useRoute("/");
</script>
