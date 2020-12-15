const binarySearch = (arr, x, start, end) => {
  if (start > end) {
    return false;
  }

  let midVal = Math.floor((start + end) / 2);

  if (arr[midVal] === x) {
    let index = arr.indexOf(x);
    console.log(index);
    console.log("Found Element! it is located at index: " + index);
    return true;
  }

  if (arr[midVal] > x) {
    return binarySearch(arr, x, start, midVal - 1);
  } else {
    return binarySearch(arr, x, midVal + 1, end);
  }
};

let array = [1, 3, 6, 7, 9, 10, 15];

console.log(binarySearch(array, 9, 0, array.length - 1));
