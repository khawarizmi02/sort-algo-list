// Function to sort an array using insertion sort
function insertionSort(arr, n) {
  var i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are
		greater than key, to one position ahead
		of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

// A utility function to print an array of size n
function printArray(A) {
  console.log(A.toString());
}

// Driver code
var arr = [64, 34, 25, 12, 22, 11, 90];
var n = arr.length;

insertionSort(arr, n);
printArray(arr);
