function bubbleSort(array) {
  let sorted;

  do {
    array.forEach((element, i) => {
      if (array[i] > array[i + 1]) {
        let test = array[i];
        array[i] = array[i + 1];
        array[i + 1] = test;
        sorted = true;
        console.log("Array Sorted: " + array);
      }
    });
  } while (sorted === true);

  return array;
  //   let newArray = array.map((number, i) => {
  //     array.forEach((number2, j) => {
  //       if (number > number2 && i !== j) {
  //         let holder = number2;
  //         number2 = number;
  //         number = holder;
  //       } else {
  //         number;
  //       }
  //     });
  //   });
  //   return newArray;
}

let array = [8, 5, 2, 9, 5, 6, 3];

console.log(bubbleSort(array));
