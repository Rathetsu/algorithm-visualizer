// export function fetchMarkdown(id) {
// 	const id_map = {
// 		'bubble-sort': 'process.env.PUBLIC_URL + ../../public/MD_Files/BubbleSort.md',
// 		'quick-sort': '../../public/MD_Files/QuickSort.md',
// 		'merge-sort': '../../public/MD_Files/MergeSort.md',
// 		'heap-sort': '../../public/MD_Files/HeapSort.md',
// 	}
// 	const markdownContent = fetch(id_map[id])
// 		.then((response) => response.text())
// 	console.log('zby', markdownContent)
// 	return markdownContent;
// }

export const SORTING_ALGORITHMS_DESCRIPTION = 'Discover the fascinating realm of sorting algorithms through our engaging visualizers. Experience the magic of popular algorithms like Bubble Sort, Quick Sort, and Merge Sort, as they efficiently organize data in a specific order. Unravel the intricacies of these classic algorithms and enhance your understanding of their underlying principles.'

export const PATHFINDING_ALGORITHMS_DESCRIPTION = 'Explore the world of path finding algorithms with our interactive visualizers. Dive into popular algorithms such as A* and Dijkstra\'s, and learn how they efficiently find the shortest path between two points in a graph. Unlock the secrets of these powerful algorithms and gain a deeper understanding of their inner workings.'


// ------------------------------------------------------------------------------------------------------------------------------------------- //

// Bubble Sort
export const BUBBLE_SORT_DESCRIPTION = `Bubble Sort is a basic sorting technique that functions by continuously exchanging neighboring elements if their sequence is incorrect. Due to its relatively high average and worst-case time complexity, this algorithm is not ideal for handling extensive data sets.`;
export const BUBBLE_SORT_INDEPTH_EXPLANATION = `
# Understanding Bubble Sort

Bubble sort is a simple sorting algorithm that compares adjacent elements in an array and swaps them if they are in the wrong order.

The algorithm continues to do this until the entire array is sorted. Let's take a closer look at the process using the example array \`arr[] = {6, 3, 0, 5}\`:

### First Pass:

The algorithm starts by comparing the first two elements, and swaps them if the first element is greater than the second element:

\`(6 3 0 5)\` → \`(3 6 0 5)\`, Here, the algorithm compares the first two elements, and swaps them since 6 > 3. 

\`(3 6 0 5)\` → \`(3 0 6 5)\`, Swap since 6 > 0

\`(3 0 6 5)\` → \`(3 0 5 6)\`, Swap since 6 > 5  


### Second Pass:

The algorithm continues with the second iteration:

\`(3 0 5 6)\` → \`(0 3 5 6)\`, Swap since 3 > 0

\`(0 3 5 6)\` → \`(0 3 5 6)\`, No change as 5 > 3  


### Third Pass:

Now, the array is already sorted, but the algorithm doesn't know it's complete. The algorithm needs one whole pass without any swaps to know it is sorted.

\`(0 3 5 6)\` → \`(0 3 5 6)\`, No change as 3 > 0 

The array is now sorted, and no more passes will occur.  

&nbsp;  

# Implementation of Bubble Sort  

To implement the bubble sort algorithm, adhere to the following procedure:

1. Utilize a nested for loop to traverse the given input array with two variables, \`i\` and \`j\`, with constraints \`0 ≤ i < n-1\` and \`0 ≤ j < n-i-1\`, where \`n\` represents the size of the array.
2. Within the nested loop, check whether \`arr[j]\` is greater than \`arr[j+1]\`. If it is, swap these adjacent elements; otherwise, proceed to the next iteration.
3. Upon completion of the loop iterations, output the sorted array.

&nbsp;  

## Optimization

The basic bubble sort algorithm always runs in $O(N^2)$ time, even if the array is sorted. It can be optimized by stopping the algorithm if the inner loop didn't cause any swaps.

&nbsp;  

## In-Depth Complexity Analysis for Both Worst and Average Cases

In the worst-case scenario, bubble sort has a time complexity of $O(N^2)$, which occurs when the array is sorted in reverse order. In the average case, bubble sort also has a time complexity of $O(N^2)$, as it must compare and potentially swap elements multiple times.

&nbsp;  

## Boundary Case for Bubble Sort

The best-case scenario for bubble sort occurs when the input array is already sorted. In this case, the time complexity is $O(N)$, as the algorithm only needs to perform one pass through the array to confirm that it is sorted.

&nbsp;  

## In-Place Sorting in Bubble Sort

Bubble sort is an in-place sorting algorithm, meaning it sorts the input array without using any additional memory. The algorithm only uses a constant amount of extra memory to store temporary variables during the swapping process.

&nbsp;  

## Stability of Bubble Sort Algorithm

Bubble sort is a stable sorting algorithm. This means that the relative order of equal elements in the input array is preserved in the sorted output. Since the algorithm only swaps elements when they are in the wrong order, equal elements will never be swapped, maintaining their initial order.

&nbsp;  

## Applications of Bubble Sort

Bubble sort is best suited for small data sets or when the input array is partially sorted. It is commonly used in educational settings due to its simplicity and ease of
`

export const BUBBLE_SORT_PSEUDOCODE = `procedure bubbleSort(A : list of sortable items)\n    n := length(A)\n    repeat\n        swapped := false\n        for i := 1 to n-1 inclusive do\n            if A[i-1] > A[i] then\n                swap(A[i-1], A[i])\n                swapped := true\n            end if\n        end for\n        n := n - 1\n    until not swapped\nend procedure`;

export const BUBBLE_SORT_PYTHON = `def bubble_sort(arr):\n    n = len(arr)\n    while n > 1:\n        swapped = False\n        for i in range(1, n):\n            if arr[i - 1] > arr[i]:\n                arr[i - 1], arr[i] = arr[i], arr[i - 1]\n                swapped = True\n        n -= 1\n        if not swapped:\n            break`
export const BUBBLE_SORT_JAVASCRIPT = `function bubbleSort(arr) {\n  let n = arr.length;\n  while (n > 1) {\n    let swapped = false;\n    for (let i = 1; i < n; i++) {\n      if (arr[i - 1] > arr[i]) {\n        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];\n        swapped = true;\n      }\n    }\n    n--;\n    if (!swapped) {\n      break;\n    }\n  }\n}`;

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// Merge Sort
export const MERGE_SORT_DESCRIPTION = `Merge Sort is an efficient, stable sorting algorithm that works by dividing the unsorted list into n sublists, each containing one element, and then repeatedly merging sublists to produce new sorted sublists until there is only one sublist remaining. Merge Sort has a time complexity of O(n * log(n)), where n is the number of items being sorted, making it more efficient than Bubble Sort, especially for larger lists.`;
export const MERGE_SORT_INDEPTH_EXPLANATION = ``;
export const MERGE_SORT_PSEUDOCODE = ``;

export const MERGE_SORT_PYTHON = ``;
export const MERGE_SORT_JAVASCRIPT = ``;

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// Heap Sort
export const HEAP_SORT_DESCRIPTION = `Heap Sort is a comparison-based sorting algorithm that works by dividing the input into a sorted and an unsorted region, iteratively shrinking the unsorted region by extracting the largest element and moving that to the sorted region. Heap Sort uses a binary heap data structure to efficiently find the largest unsorted element. Heap Sort has a time complexity of O(n * log(n)), where n is the number of items being sorted, making it more efficient than Bubble Sort and similar in performance to Merge Sort.`;
export const HEAP_SORT_INDEPTH_EXPLANATION = ``;
export const HEAP_SORT_PSEUDOCODE = ``;

export const HEAP_SORT_PYTHON = ``;
export const HEAP_SORT_JAVASCRIPT = ``;



// ------------------------------------------------------------------------------------------------------------------------------------------- //

// Quick Sortt
export const QUICK_SORT_DESCRIPTION = `Quick Sort is a highly efficient and widely-used sorting algorithm that works by selecting a 'pivot' element from the list and partitioning the other elements into two groups - those less than the pivot and those greater than the pivot. The lesser and greater groups are then sorted recursively. Quick Sort's average-case time complexity is O(n * log(n)), where n is the number of items being sorted. However, its worst-case time complexity is O(n^2), although this can be avoided with proper selection of pivot elements. Quick Sort is generally faster in practice than other sorting algorithms like Merge Sort and Heap Sort due to its efficient memory usage and cache performance.`;
export const QUICK_SORT_INDEPTH_EXPLANATION = ``;
export const QUICK_SORT_PSEUDOCODE = ``;

export const QUICK_SORT_PYTHON = ``;
export const QUICK_SORT_JAVASCRIPT = ``;

// ------------------------------------------------------------------------------------------------------------------------------------------- //

