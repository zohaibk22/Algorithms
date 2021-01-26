let test = document.querySelector("h1");
test.style.color = "red";

let submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function () {
  let inputText = document.querySelector(".sample__input").value;
  inputText = inputText.toLowerCase();
  //   console.log(inputText);
  let splitArray = inputText.split(" ");

  console.log("Before Remove Punk: " + splitArray);

  removePunctuation(splitArray);

  console.log("Before After Punk: " + splitArray);

  wordCount(splitArray);

  console.log("After WordCount Punk: " + splitArray);
});

function wordCount(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    let count = 1;
    for (let j = i + 1; j < inputArray.length; j++) {
      if (inputArray[i] === inputArray[j]) {
        count += 1;
        inputArray.splice(j, 1);
      }
    }

    let parentContainer = document.getElementsByClassName("word__count");
    let wordParagraph = document.createElement("p");
    wordParagraph.innerText = `${inputArray[i]} = ${count}`;

    parentContainer[0].appendChild(wordParagraph);
  }

  return inputArray;
}

function removePunctuation(array) {
  array.forEach((element, index) => {
    if (
      element[element.length - 1] === "," ||
      element[element.length - 1] === "."
    ) {
      array[index] = array[index].replace(element[element.length - 1], "");
    }

    if (element === "-" || element.length < 1) {
      array.splice(index, 1);
    }
  });
}
