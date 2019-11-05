function translate(word) {
  // first convert word to an all lowercase version of itself
  //   word = word.toLowerCase();
  let casing = findCase(word);
  console.log(casing);
  let output = "";
  //if the first letter is already a vowel, return the word
  // with 'way' appended on the back
  if (isVowel(word[0])) {
    if (casing === "lower" || casing === "title" || casing === "mixed") {
      return (word += "way");
    } else {
      return (word += "WAY");
    }
  } // if the first letter isn't a vowel, check WHERE the first one is
  // then slice the letters before the vowel,
  // add it to the end with the slice of all letters after the vowel
  // and add "ay" to the back
  let firstVow = firstVowel(word);
  let translated = word.slice(firstVow) + word.slice(0, firstVow) + "ay";
  if (casing === "lower" || casing === "mixed") {
    // return (word += "way");
    translated = word.slice(firstVow) + word.slice(0, firstVow) + "ay";
  } else if (casing === "title") {
    translated = word.slice(firstVow) + word.slice(0, firstVow) + "ay";
    translated = translated.toLowerCase();
    translated = translated.charAt(0).toUpperCase() + translated.slice(1);
  } else if (casing === "upper") {
    translated = word.slice(firstVow) + word.slice(0, firstVow) + "AY";
    // console.log("OOOOOPER");
    // return (word += "WAY");
  }
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
  let firstUpper;
  let upperNum = 0;
  // loop through all the letters in the word,
  // if only the first letter is uppercase, return 'titlecase'
  // if all the letters are uppercase, return 'uppercase'
  // if all the letters are lowercase, return 'lowercase'
  // if none of the above, return 'mixed'
  for (let i = 0; i < word.length; i++) {
    if (isUppercase(word[i])) {
      upperNum++;
      if (!firstUpper) {
        firstUpper = i;
      }
    }

    // isUppercase(word[i]);
  }
  if (upperNum === 1 && firstUpper === 0) {
    return "title";
  }
  if (upperNum > 1 && upperNum < word.length) {
    return "mixed";
  }
  if (upperNum === 0) {
    return "lower";
  }
  if (upperNum === word.length) {
    return "upper";
  }
}
function isUppercase(letter) {
  if (letter === letter.toUpperCase()) return true;
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
