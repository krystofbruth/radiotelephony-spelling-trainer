<template>
  <div class="Trainer">
    <header>
      <article>
        <button class="primary" v-on:click="showAnswer = true">
          Show answer
        </button>
      </article>

      <article>
        <p v-bind:class="{ show: showAnswer }" class="answer">
          {{ phoneticAlphabet[prompt[currentChar].toLowerCase()] }}
        </p>
      </article>

      <article>
        <ExclusiveSelect
          :choices="['Alphabet', 'Random', 'Sentence']"
          @update="mode = $event"
        />
      </article>
    </header>

    <p class="prompt">
      <span
        v-for="(character, index) in prompt"
        :key="index"
        v-bind:class="{
          current: index === currentChar,
          completed: index < currentChar,
        }"
        >{{ character }}</span
      >
    </p>
    <input v-model="inputValue" type="text" />
  </div>
</template>

<style scoped>
div.Trainer {
  width: 100%;
  background-color: var(--secondary-background);
  padding: var(--padding);
  box-sizing: border-box;
  border-radius: var(--border-radius);
  font-family: "Roboto Mono", monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: relative;
}

header {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
}

header > article:first-child {
  justify-self: left;
}

header > article:nth-child(2) {
  justify-self: center;
}

header > article:nth-child(3) {
  justify-self: right;
}

p.answer {
  font-weight: 700;
  font-size: 1.5rem;
  opacity: 0;
  text-transform: uppercase;
}

p.answer.show {
  transition: var(--transition);
  opacity: 1;
}

p.prompt {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: justify;
  line-height: 1.1;
}

p.prompt > span {
  opacity: 0.2;
  padding: 0.05rem 0.2rem;
}

p.prompt > span.current {
  opacity: 1;
  color: black;
  background-color: var(--text-color);
  border-radius: var(--border-radius);
}

p.prompt > span.completed {
  opacity: 1;
}

input[type="text"] {
  font-size: 1.5rem;
  font-family: inherit;
  background-color: var(--terciary-background);
  color: inherit;
  border: none;
  border-radius: var(--border-radius);
  padding: calc(var(--padding) / 2);
  outline: none;
}
</style>

<script setup>
import { ref, watch } from "vue";
import ExclusiveSelect from "./ExclusiveSelect.vue";
import NumberSelect from "./NumberSelect.vue";
import { phoneticAlphabet, punctuation } from "./js/alphabets";
import { randomChars } from "./js/generatePrompt";
import { sentence } from "https://unpkg.com/@ndaidong/txtgen/esm/mod.js";
const alphabet = Object.keys(phoneticAlphabet);

const currentChar = ref(0);
const inputValue = ref("");
const mode = ref("Alphabet");
const prompt = ref("");
const showAnswer = ref(false);

const props = defineProps({
  initialPrompt: String,
});

if (props.initialPrompt) {
  prompt.value = props.initialPrompt;
}

function promptChange() {
  prompt.value = "";
  currentChar.value = 0;
  showAnswer.value = false;

  switch (mode.value) {
    case "Alphabet":
      prompt.value = alphabet.join("");
      break;
    case "Random":
      prompt.value = randomChars(15);
      break;
    case "Sentence":
      prompt.value = sentence();
      break;
    default:
      console.error("Invalid mode selected!");
      break;
  }
}

function checkInput(newValue, oldValue) {
  let tolerantValue = newValue.trim().toLowerCase();

  if (
    tolerantValue ==
    phoneticAlphabet[prompt.value[currentChar.value].toLowerCase()]
  ) {
    inputValue.value = "";
    showAnswer.value = false;

    do {
      if (currentChar.value == prompt.value.length - 1) {
        promptChange();
        return;
      }
      currentChar.value += 1;
    } while (
      prompt.value[currentChar.value] == " " ||
      punctuation.includes(prompt.value[currentChar.value])
    );
  }
}

watch(inputValue, checkInput);
watch(mode, promptChange);

promptChange();
</script>
