<template>
  <div class="wrapper">
    <div>
      <input v-model="input" type="number" />
    </div>
  </div>
</template>

<style scoped>
div {
  background-color: var(--terciary-background);
  padding: calc(var(--padding) / 3 + var(--padding) / 2);
  border-radius: var(--border-radius);
  width: fit-content;
}

input {
  background-color: transparent;
  border: none;
  font-size: 1.1rem;
  width: 2.5rem;
  height: 1rem;
  color: inherit;
  outline: none;
}
</style>

<script setup>
import { ref, watch } from "vue";

const input = ref(0);

const props = defineProps({
  initialValue: Number,
  min: Number,
  max: Number,
});

const emit = defineEmits(["update"]);

if (props.initialValue) {
  input.value = props.initialValue;
}

function update() {
  if (props.min && props.min > input.value) {
    input.value = props.min;
  }
  if (props.max && props.max < input.value) {
    input.value = props.max;
  }
  emit("update", input.value);
}

watch(input, update);
</script>
