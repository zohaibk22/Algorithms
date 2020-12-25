function caesarCipherEncryptor(string, key) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  let newAlphabet = alphabet.split("");
  // console.log(newString);

  let stringArray = string.split("");

  let wordInput = [];

  stringArray.forEach((stringLetters) => {
    newAlphabet.forEach((letter, index) => {
      if (stringLetters === letter) {
        wordInput.push(newAlphabet[(index + key) % newAlphabet.length]);
      }
    });
  });

  return wordInput.join("");
}

console.log(caesarCipherEncryptor("xyz", 2));
