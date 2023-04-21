# Sorting Algorithms Overview

We've implemented 4 sorting algorithms in this project which are **Bubble Sort**, **Merge Sort**, **Quick Sort**, and **Heap Sort**.

Our implementation of those algorithms is different from the traditional implementation so that we can visualize the sorting process.

We'll go over the differences between the traditional implementation and our implementation in this article.

## 1. Merge Sort

1. **Additional `steps` parameter**: The `steps` array is passed as an additional parameter to the `mergeSortHelper` and `merge` functions. This array stores the steps taken during the sorting process.

	```javascript
	mergeSortHelper(array, 0, array.length - 1, steps);
	```

2. **Return `steps` instead of the sorted array**: The `mergeSort` function returns the `steps` array rather than the sorted array itself.
	```javascript
	return steps;
	```

3. **Recording steps during the merge process**: During the merge process, when comparing and overwriting elements, additional information is pushed into the `steps` array. This includes the type of action taken ('compare' or 'overwrite') and the indices or values involved in the action.
	```javascript
	steps.push({ type: 'compare', first: start + i, second: mid + 1 + j });
	...
	steps.push({ type: 'overwrite', index: k, value: left[i] });
	```

The core logic of the merge sort algorithm remains the same, with modifications primarily aimed at collecting and returning the steps taken during the sorting process.


## 2. Quick Sort

This quick sort implementation is designed to keep track of the steps taken during the sorting process by recording the actions performed during the partition process. During partitioning, when elements are being compared and swapped, additional information is pushed into the `steps` array. This includes the type of action taken ('compare' or 'swap') and the indices involved in the action.

1. When two elements are compared, a 'compare' action is recorded. The 'compare' action object includes the indices of the two elements being compared:
	```javascript
	steps.push({ type: 'compare', first: i, second: end });
	```

2. When two elements are swapped, a 'swap' action is recorded. The 'swap' action object includes the indices of the two elements being swapped:
	```javascript
	steps.push({ type: 'swap', first: i, second: j });
	```

By recording these steps, the implementation provides a detailed account of the sorting process. This can be particularly useful for visualizing the algorithm or for educational purposes, helping users understand how quick sort works and the decisions made at each step.


## 3. Heap Sort

#### Recording steps during the heapify, buildHeap, and sortHeap processes:

During these processes, when elements are being compared and swapped, additional information is pushed into the steps array. This includes the type of action taken ('compare' or 'swap') and the indices involved in the action.

1. During the `heapify` process, when two elements are compared, a 'compare' action is recorded. The 'compare' action object includes the indices of the two elements being compared:
	```javascript
	steps.push({ type: 'compare', first: left, second: largest });
	```

2. During the `heapify` and `sortHeap` processes, when two elements are swapped, a 'swap' action is recorded. The 'swap' action object includes the indices of the two elements being swapped:
	```javascript
	steps.push({ type: 'swap', first: i, second: largest });
	```




## 4. Bubble Sort

The implementation keeps track of the steps taken during the sorting process by recording the actions performed in the nested loops. During these loops, when elements are being compared and swapped, additional information is pushed into the `steps` array. This includes the type of action taken ('compare' or 'swap') and the indices involved in the action.

1. When two elements are compared, a 'compare' action is recorded. The 'compare' action object includes the indices of the two elements being compared:
	```javascript
	steps.push({ type: 'compare', first: j, second: j + 1 });
	```

2. When two elements are swapped, a 'swap' action is recorded. The 'swap' action object includes the indices of the two elements being swapped:

	```javascript
	steps.push({ type: 'swap', first: j, second: j + 1 });
	```
	
