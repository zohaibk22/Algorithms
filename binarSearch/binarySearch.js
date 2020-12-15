const binarySearch = (start, end, searchVal, arr) => {
  if (start > end) {
    return false;
  }

  let midVal = Math.floor((start + end) / 2);

  if (arr[midVal] === searchVal) {
    return true;
  }

  if (arr[midVal] > searchVal) {
    return binarySearch(start, midVal - 1, searchVal, arr);
  }
};
