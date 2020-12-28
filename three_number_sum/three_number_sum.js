function threeNumberSum(array, targetSum) {
  let triplets = [];
  let placeHolder = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let s = j + 1; s < array.length; s++) {
        // console.log(s);
        if (array[i] + array[j] + array[s] === targetSum) {
          let tempArray = [];
          tempArray.push(array[i]);
          tempArray.push(array[j]);
          tempArray.push(array[s]);

          tempArray.sort();
          //   console.log(tempArray);

          triplets.push(tempArray);
          //   console.log(triplets);
        }
      }
    }
  }
  console.log(
    triplets.sort((a, b) => {
      return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
    })
  );
  return triplets;
}

let array = [12, 3, 1, 2, -6, 5, -8, 6];
let targetSum = 0;

console.log(threeNumberSum(array, targetSum));
