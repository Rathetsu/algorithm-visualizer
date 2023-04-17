# Sorting Algorithms Overview

We've implemented 4 sorting algorithms in this project which are **Bubble Sort**, **Merge Sort**, **Quick Sort**, and **Heap Sort**.

Our implementation of those algorithms is different from the traditional implementation so that we can visualize the sorting process.

We'll go over the differences between the traditional implementation and our implementation in this article.

## 1. Bubble Sort

In the modified Bubble Sort implementation, I added an extra array called `steps` to keep track of the comparisons and swaps made during the sorting process. This array will later be used to animate the visualization.

Here's the explanation of the changes I made:

1. Create a `steps` array to store the sorting steps:

```javascript
const steps = [];
```

2. During each comparison, push an object to the `steps` array containing the type (`'compare'`) and the indices of the two elements being compared:

```javascript
steps.push({ type: "compare", first: j, second: j + 1 });
```

3. If a swap occurs, push another object to the steps array with the type ('swap') and the indices of the two elements being swapped:

```javascript
steps.push({ type: "swap", first: j, second: j + 1 });
```

4. Finally, return the steps array from the function:

```javascript
return steps;
```

These changes allow the Bubble Sort function to return an array of steps that represent the changes (comparisons and swaps) that happened during the sorting process. This array of steps will be used later to animate the visualization in the Sorting Visualizer component.

## 2. Quick Sort

In the original Quick Sort algorithm, we didn't keep track of the steps involved in sorting. The primary change we made was to add an array called `steps` that will store the steps taken by the algorithm. Each step consists of two indices, `i` and `j`, which represent the two elements being compared or swapped in the array during the sorting process.

1. We initialized an empty array called `steps` at the beginning of the `quickSort` function.

2. In the `partition` function, we push the current pair of indices, `i` and `j`, into the `steps` array before any comparison or swap occurs.

```javascript
function partition(arr, low, high, steps) {
  // ... other code

  for (let j = low; j < high; j++) {
    steps.push([j, i]); // Push the pair of indices into steps array
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }

  // ... other code
}
```

Now, the Quick Sort algorithm returns an array of steps instead of a sorted result, allowing us to visualize the sorting process.


## 3. Heap Sort

Similar to the changes made in the Quick Sort algorithm, we added a `steps` array to store the sorting steps for Heap Sort as well.

1. We initialized an empty array called `steps` at the beginning of the `heapSort` function.

2. In the `heapify` function, we pushed the indices `largest` and `i` into the `steps` array just before swapping the elements.

```javascript
function heapify(arr, n, i, steps) {
  // ... other code

  if (largest !== i) {
    steps.push([i, largest]); // Push the pair of indices into steps array
    swap(arr, i, largest);
    heapify(arr, n, largest, steps);
  }
}

function quickSort(arr, low = 0, high = arr.length - 1, steps = []) {
  // ... other code

  return steps; // Return steps array instead of the sorted array
}

```


3. After the `heapify` function, we pushed the indices `0` and `end` into the `steps` array just before swapping the elements.

```javascript
function heapSort(arr) {
  const n = arr.length;
  const steps = []; // Step 1: Initialize the steps array

  // ... other code

  for (let end = n - 1; end > 0; end--) {
    steps.push([0, end]); // Push the pair of indices into steps array
    swap(arr, 0, end);
    heapify(arr, end, 0, steps);
  }

  // Modify the return statement to return steps array
  return steps;
}
```

With these changes, the Heap Sort algorithm also returns an array of steps instead of a sorted result, enabling us to visualize the sorting process.


## 4. Merge Sort

Currently buggy. Will update this section once the bug is fixed.