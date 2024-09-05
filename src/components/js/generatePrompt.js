import { phoneticAlphabet } from "./alphabets";
const alphabet = Object.keys(phoneticAlphabet);

export function randomChars(count) {
  let output = "";

  for (let i = 0; i < count; i++) {
    let newChar = Math.floor(Math.random() * 26);
    newChar = alphabet[newChar];

    output += newChar;
  }

  return output;
}
