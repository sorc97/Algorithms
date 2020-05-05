const list = [1, 2, 3, 4, 5, 6, 7, 8];

const binarySearch = (list = [], item = 0) => {
  let low = 0;
  let high = list.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if (guess == item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

console.log(binarySearch(list, 3));
console.log(binarySearch(list, 8));
console.log(binarySearch(list, -1));