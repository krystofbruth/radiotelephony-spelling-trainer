<template>
  <section class="CheatSheetView">
    <Trainer />
    <CheatSheet />
  </section>
</template>

<style class="scoped">
section.CheatSheetView {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  align-items: start;
}
</style>

<script setup>
import Trainer from "@/components/Trainer.vue";
import CheatSheet from "@/components/CheatSheet.vue";
</script>
