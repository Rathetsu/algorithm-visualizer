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
steps.push({ type: 'compare', first: j, second: j + 1 });
```

3. If a swap occurs, push another object to the steps array with the type ('swap') and the indices of the two elements being swapped:

```javascript
steps.push({ type: 'swap', first: j, second: j + 1 });
```

4. Finally, return the steps array from the function:

```javascript
return steps;
```

These changes allow the Bubble Sort function to return an array of steps that represent the changes (comparisons and swaps) that happened during the sorting process. This array of steps will be used later to animate the visualization in the Sorting Visualizer component.