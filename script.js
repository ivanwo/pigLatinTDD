function translate(word) {
  // first convert word to an all lowercase version of itself
  //   word = word.toLowerCase();
  //if the first letter is already a vowel, return the word
  // with 'way' appended on the back
  if (isVowel(word[0])) {
    return (word += "way");
  } // if the first letter isn't a vowel, check WHERE the first one is
  // then slice the letters before the vowel,
  // add it to the end with the slice of all letters after the vowel
  // and add "ay" to the back
  let firstVow = firstVowel(word);
  let translated = word.slice(firstVow) + word.slice(0, firstVow) + "ay";
  return translated;
}

function firstVowel(word) {
  // for every letter in the word, check if it is a vowel
  // if it is a vowel, return the letter's position inside the word
  for (let i = 0; i < word.length; i++) {
    if (isVowel(word[i])) {
      return i;
    }
  }
}
function isVowel(letter) {
  // if the letters before the "indexOf" are not found, return -1
  return "aeiouAEIOU".indexOf(letter) !== -1;
}
function findCase(word) {
  let casing = "lowercase";
  // loop through all the letters in the word,
  // if only the first letter is uppercase, return 'titlecase'
  // if all the letters are uppercase, return 'uppercase'
  // if all the letters are lowercase, return 'lowercase'
  // if none of the above, return 'default'
  for (let i = 0; i < word.length; i++) {
    isUppercase(word[i]);
  }
}
function isUppercase(letter) {
  if (letter === letter.toUppercase()) return true;
  else return false;
}

if (typeof module !== "undefined") {
  // Node
  module.exports = { translate };
} else {
  // Browser
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let word = formData.get("word");
    let translation = translate(word);
    document.querySelector("#translation").innerText = translation;
  });
}
