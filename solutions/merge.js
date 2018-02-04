// Sorting Algorithm

// PSEUDOCODE:
// MERGING STEP:
// 1. Create an empty array called result
// 2. Split the input array into 2 halves that are as equal in length as possible
  // a. Let’s denote the sub - arrays as A and B
// 3. Compare A[0] to B[0]
  // a. Assume A[0] is smaller → add the element to the result array
// 4. Next, compare A[1] to B[0]
  // a. Assume this time B[0] is smaller, so we add it to the result array
// 5. Compare A[1] to B[1] and so on
// 6. When one of the sub-arrays is empty, append all elements of the other to result (this will not cause reordering)

// RECURSIVE STEP:
// 1. Rather splitting the input array into only 2 halves, we can split the input array
//    into halves RECURSIVELY until we have multiple pairs of single - item arrays(=BASE CASE)
// 2. Apply the merging step described above
// 3. By assembling all the sub - arrays(starting from the single - item arrays), we can put them in the correct order


function sort(array) {
  let merge = (left, right) => {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
      let leftElement = left[indexLeft];
      let rightElement = right[indexRight];
      if (leftElement < rightElement) { // compare the elements
        result.push(leftElement);
        indexLeft++;
      } else {
        result.push(rightElement);
        indexRight++;
      }
    }
    // when one of the sub-arrays is empty, append all elements of the other
    let mergeResult = [...result, ...left.slice(indexLeft), ...right.slice(indexRight)];
    return mergeResult;
  }

  let sortRecursion = (passedArray) => {
    // BASE CASE:
    if (passedArray.length === 1) {
      return passedArray; // sub-array with single element;
    }
  
    // split array to two halves
    let indexMiddle = Math.floor(passedArray.length / 2);
    let left = passedArray.slice(0, indexMiddle);
    let right = passedArray.slice(indexMiddle);

    // RECURSION CASE:
    let sortLeft = sortRecursion(left);
    let sortRight = sortRecursion(right);
    let result = merge(sortLeft, sortRight);
    return result;
  }

  let sortedResult = sortRecursion(array);
  return sortedResult;
}

// Test cases
let array1 = [3, 5, 2, 4, 1];
let array2 = ['C', 'A', 'E', 'B', 'D'];

// Sort arrays
let sortedArray1 = sort(array1);
let sortedArray2 = sort(array2);

// Print out to console
console.log('Sorted using MERGE SORT');
console.log(sortedArray1);
console.log(sortedArray2);