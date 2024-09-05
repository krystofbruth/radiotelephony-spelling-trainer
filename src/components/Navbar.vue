<template>
  <header>
    <h1 v-on:click="navigate('/')">RadioTelephony Practice</h1>
    <nav>
      <button v-on:click="navigate('/')">Trainer</button>
      <button v-on:click="navigate('/cheatsheet')">Cheatsheet</button>
      <button v-on:click="navigate('/about')">About</button>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: var(--padding);
  background-color: var(--secondary-background);
  position: fixed;
  width: 100vw;
  box-sizing: border-box;
  z-index: 1;
}

nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
}

h1 {
  cursor: pointer;
}

button {
  font-size: 1.2rem;
  transition: var(--transition);
}

button:hover {
  color: var(--focused-text-color);
}
</style>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function navigate(page) {
  router.push(page);
}
</script>
