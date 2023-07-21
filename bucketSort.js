// Javascript program to sort an array
// using bucket sort

// Function to sort arr[] of size n
// using bucket sort
function bucketSort(arr, n) {
  if (n <= 0) return;

  // 1) Create n empty buckets
  let buckets = new Array(n);

  for (let i = 0; i < n; i++) {
    buckets[i] = [];
  }

  // 2) Put array elements in different buckets
  for (let i = 0; i < n; i++) {
    let idx = arr[i] * n;
    let flr = Math.floor(idx);
    buckets[flr].push(arr[i]);
  }

  // 3) Sort individual buckets
  for (let i = 0; i < n; i++) {
    buckets[i].sort(function (a, b) {
      return a - b;
    });
  }

  // 4) Concatenate all buckets into arr[]
  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index++] = buckets[i][j];
    }
  }
}

function printArray(A) {
  console.log(A.toString());
}

// Driver code
var arr = [64, 34, 25, 12, 22, 11, 90];
var n = arr.length;
bucketSort(arr, n);

console.log('Sorted array is');
printArray(arr);
// This code is contributed by unknown2108
