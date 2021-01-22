function moveElementToEnd(array, toMove) {
  let count = 0;
  array.forEach((element, index) => {
    if (array[index] === toMove) {
      //   console.log(`pre pre run ${array}`);
      //   array.splice(index, 1);
      //   console.log(`pre run ${array}`);
      //   array.push(toMove);
      //   console.log(`post run ${array}`);

      array.splice(index, 1);
      count++;
    }
  });
  console.log(array);

  for (let i = 0; i < count; i++) {
    array.push(toMove);
  }
  return array;
}

let testArray = [2, 1, 2, 2, 2, 3, 4, 2];
let testToDo = 2;

console.log(moveElementToEnd(testArray, testToDo));
