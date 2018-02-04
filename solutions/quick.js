// Sorting Algorithm

// PSEUDOCODE:
// 1. Pick an element, called PIVOT, from the array. (eg.first element)
// 2. Partitioning: CREATE a sub - array so that all elements with values less than the pivot are stored in it
//    while all elements with values greater than the pivot are stored in another sub - array
// 3. Recursion: APPLY steps 1 & 2 to:
  // - the sub - array of elements with smaller values and
  // - the sub - array of elements with greater values.
// 4. The base case of the recursion is arrays of size 0 or 1:
  // - the base case just returns the sub - array
// 5. Combine all results from the sub - arrays and pivots


function sort(array) {
  let sortRecursion = (passedArray) => {
    let less = [];
    let more = [];
    let pivotList = [];
    // BASE CASE: 
    if (passedArray.length <= 1) {
      return passedArray;
    }
    // Pick an element, called PIVOT, from the array (eg. first element)
    let pivot = passedArray[0];
    // REORDER the array:
    // elements less than the pivot -> store in 'less'
    // elements greater than the pivot -> store in 'more'
    passedArray.forEach((el) => {
      if (el < pivot) {
        less.push(el);
      } else if (el > pivot) {
        more.push(el);
      } else {
        pivotList.push(el);
      }
    });
    // RECURSION CASE: apply recursion to the subarrays 'less' & 'more'
    less = sortRecursion(less);
    more = sortRecursion(more);
    // Combine the results from the recursions
    return [...less, ...pivotList, ...more];
  };

  let result = sortRecursion(array);
  return result;
}

// Test cases
let array1 = [3, 5, 2, 4, 1];
let array2 = ['C', 'A', 'E', 'B', 'D'];

// Sort arrays
let sortedArray1 = sort(array1);
let sortedArray2 = sort(array2);

// Print out to console
console.log('Sorted using QUICK SORT');
console.log(sortedArray1);
console.log(sortedArray2);