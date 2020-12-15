const mergeSort = (array) => {
  //get the middle index
  let midVal = Math.floor(array.length / 2);

  //check if the array can be split
  if (array.length < 2) {
    return array;
  } else {
    //split the array into two sides
    let leftArray = array.slice(0, midVal);
    let rightArray = array.slice(midVal, array.length);

    //use recursion to continue splitting the two arrays until they are split inot one
    console.log("split: ", leftArray, rightArray);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
  }
};

const merge = (left, right) => {
  //create new array
  let result = new Array();

  //check if the left array and right array are empty
  while (left.length && right.length) {
    //find lower value
    if (left[0] <= right[0]) {
      //add left value
      result.push(left.shift());
    } else {
      //add right value
      result.push(right.shift());
    }
  }

  //merge left array

  while (left.length) {
    result.push(left.shift());
  }

  //merge right array
  while (right.length) {
    result.push(right.shift());
  }

  //return result array
  console.log("result: ", result);
  return result;
};

let newArray = [10, 4, 2, 9, 6, 3, 2, 19, 14];

console.log(mergeSort(newArray));
