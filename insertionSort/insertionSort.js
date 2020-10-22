const insertionSort = (array) => {
  //Keep tabs on the number we are introducing to the array
  //keeps track of the index that the next number to be inserted will be
  //Keeps the loop going for all indexes
  for (let i = 1; i < array.length; i++) {
    //For loop keeps track the two numbers that are being compared and completes the swap if neccessry
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return array;
};

console.log(insertionSort([10, 16, 2, 4, 132, 56, 72, 98, 88]));
