// Sorting Algorithm

// PSEUDOCODE:
// 1. Assume A[0] to be your sorted partial result
// 2. Take the next element in the unsorted part, A[1], and compare it with the ones before
// 3. If it is smaller, then swap it; if not, you found the correct position
// 4. A[0] and A[1] represent your new sorted partial result
// 5. Repeat step 2 - 4 until no input elements remain


function sort(array) {
  // IMPLEMENT YOUR CODE HERE


  return array;
}

// Test cases
let array1 = [3, 5, 2, 4, 1];
let array2 = ['C', 'A', 'E', 'B', 'D'];

// Sort arrays
let sortedArray1 = sort(array1);
let sortedArray2 = sort(array2);

// Print out to console
console.log('Sorted using INSERTION SORT');
console.log(sortedArray1);
console.log(sortedArray2);