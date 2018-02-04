// Sorting Algorithm

// PSEUDOCODE:
// 1. Given an input array, compare the first element, A[0], with the second one, A[1] in the array
// 2. If A[0] is bigger than A[1], swap the elements
// 3. Move to the next element, A[1], and compare it with A[2].Swap if its bigger
// 4. Do steps 1 - 3 until the end of the array is reached
// 5. Repeat steps 1-4 n times, where n denotes the length of the array

function sort(array) {
  let length = array.length;

  for (let i = 0; i < length; i++) { // loop through each element
    for (let j = 0; j < (length - i - 1); j++) { // substract i, because it bubbles up
      // Compare adjacent elements               // substract 1, because we compare adjacent elements
      if (array[j] > array[j+1]) {
        // Swap the elements
        let tmp = array[j];
        array[j] = array[j+1];
        array[j+1] = tmp;
      }
    }
  }
  return array;
}

// Test cases
let array1 = [3, 5, 2, 4, 1];
let array2 = ['C', 'A', 'E', 'B', 'D'];

// Sort arrays
let sortedArray1 = sort(array1);
let sortedArray2 = sort(array2);

// Print out to console
console.log('Sorted using BUBBLE SORT');
console.log(sortedArray1);
console.log(sortedArray2);