function chunkArrayInGroups(arr, size) {
  let myArr = [];
  while (arr.length > 0) {
    myArr.push(arr.splice(0, size));
  }
  return myArr
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
