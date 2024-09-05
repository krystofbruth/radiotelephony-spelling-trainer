<template>
  <div class="ExclusiveSelect">
    <button
      class="primary"
      v-for="choice in choices"
      v-bind:class="{ selected: choice === selection }"
      v-on:click="change(choice)"
    >
      {{ choice }}
    </button>
  </div>
</template>

<style scoped>
div.ExclusiveSelect {
  display: flex;
  gap: 0.5rem;
}

button {
  background-color: transparent;
  color: var(--text-color);
}

button.selected {
  background-color: var(--button-selected);
  color: black;
}
</style>

<script setup>
import { ref } from "vue";

const props = defineProps({
  choices: {
    type: Array,
    required: true,
  },
  initialSelection: String,
});

const selection = ref(props.choices[0]);

if (props.initialSelection) {
  selection.value = props.initialSelection;
}

const emit = defineEmits(["update"]);

function change(newChoice) {
  selection.value = newChoice;
  emit("update", newChoice);
}
</script>
