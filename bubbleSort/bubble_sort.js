const bubbleSort = (array) => {
  for (let i = 0, size = array.length; i < array.length - 1; i++) {
    for (let j = 0; j < size - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let test = array[j];
        array[j] = array[j + 1];
        array[j + 1] = test;
      }
    }
  }

  return array;
};

let newArray = [10, 14, 1, 4, 2, 3, 6, 15, 9];

console.log(bubbleSort(newArray));
