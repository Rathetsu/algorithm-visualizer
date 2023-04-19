
// Bubble Sort
export const BUBBLE_SORT_DESCRIPTION = `Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The algorithm continues iterating through the list until no more swaps are needed, indicating that the list is sorted. Bubble Sort has a worst-case and average-case time complexity of O(n^2), where n is the number of items being sorted, making it inefficient for large lists.`;
export const BUBBLE_SORT_INDEPTH_EXPLANATION = `Bubble Sort works by iterating through the list from the beginning to the end, comparing each pair of adjacent elements and swapping them if they are in the wrong order. This process is repeated until no swaps are needed, which indicates that the list is sorted. Bubble Sort has a worst-case and average time complexity of O(n^2), where n is the number of items being sorted. It performs well for small or nearly sorted datasets but is inefficient on large lists.`;
export const BUBBLE_SORT_PSEUDOCODE = `procedure bubbleSort(A : list of sortable items)\n    n := length(A)\n    repeat\n        swapped := false\n        for i := 1 to n-1 inclusive do\n            if A[i-1] > A[i] then\n                swap(A[i-1], A[i])\n                swapped := true\n            end if\n        end for\n        n := n - 1\n    until not swapped\nend procedure`;

export const BUBBLE_SORT_PYTHON = `def bubble_sort(arr):\n    n = len(arr)\n    while n > 1:\n        swapped = False\n        for i in range(1, n):\n            if arr[i - 1] > arr[i]:\n                arr[i - 1], arr[i] = arr[i], arr[i - 1]\n                swapped = True\n        n -= 1\n        if not swapped:\n            break`
export const BUBBLE_SORT_JAVASCRIPT = `function bubbleSort(arr) {\n  let n = arr.length;\n  while (n > 1) {\n    let swapped = false;\n    for (let i = 1; i < n; i++) {\n      if (arr[i - 1] > arr[i]) {\n        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];\n        swapped = true;\n      }\n    }\n    n--;\n    if (!swapped) {\n      break;\n    }\n  }\n}`;




// ------------------------------------------------------------------------------------------------------------------------------------------- //





export const MERGE_SORT_DESCRIPTION = `Merge Sort is an efficient, stable sorting algorithm that works by dividing the unsorted list into n sublists, each containing one element, and then repeatedly merging sublists to produce new sorted sublists until there is only one sublist remaining. Merge Sort has a time complexity of O(n * log(n)), where n is the number of items being sorted, making it more efficient than Bubble Sort, especially for larger lists.`;

export const HEAP_SORT_DESCRIPTION = `Heap Sort is a comparison-based sorting algorithm that works by dividing the input into a sorted and an unsorted region, iteratively shrinking the unsorted region by extracting the largest element and moving that to the sorted region. Heap Sort uses a binary heap data structure to efficiently find the largest unsorted element. Heap Sort has a time complexity of O(n * log(n)), where n is the number of items being sorted, making it more efficient than Bubble Sort and similar in performance to Merge Sort.`;

export const QUICK_SORT_DESCRIPTION = `Quick Sort is a highly efficient and widely-used sorting algorithm that works by selecting a 'pivot' element from the list and partitioning the other elements into two groups - those less than the pivot and those greater than the pivot. The lesser and greater groups are then sorted recursively. Quick Sort's average-case time complexity is O(n * log(n)), where n is the number of items being sorted. However, its worst-case time complexity is O(n^2), although this can be avoided with proper selection of pivot elements. Quick Sort is generally faster in practice than other sorting algorithms like Merge Sort and Heap Sort due to its efficient memory usage and cache performance.`;

export const SORTING_ALGORITHMS_DESCRIPTION = 'Discover the fascinating realm of sorting algorithms through our engaging visualizers. Experience the magic of popular algorithms like Bubble Sort, Quick Sort, and Merge Sort, as they efficiently organize data in a specific order. Unravel the intricacies of these classic algorithms and enhance your understanding of their underlying principles.'

export const PATHFINDING_ALGORITHMS_DESCRIPTION = 'Explore the world of path finding algorithms with our interactive visualizers. Dive into popular algorithms such as A* and Dijkstra\'s, and learn how they efficiently find the shortest path between two points in a graph. Unlock the secrets of these powerful algorithms and gain a deeper understanding of their inner workings.'