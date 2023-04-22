import { mergeSort, quickSort, heapSort, bubbleSort } from '../components/Algorithms/SortingAlgorithms/SortingAlgorithms';
import * as strings from './strings';


export const sortingAlgorithms = [
	{
		id: 1,
		name: "Bubble Sort",
		function: bubbleSort,
		description: strings.BUBBLE_SORT_DESCRIPTION,
		inDepthExplanation: strings.BUBBLE_SORT_INDEPTH_EXPLANATION,
		pseudocode: strings.BUBBLE_SORT_PSEUDOCODE,
		implementations: [
			{
				language: "Python",
				code: strings.BUBBLE_SORT_PYTHON
			},
			{
				language: "JavaScript",
				code: strings.BUBBLE_SORT_JAVASCRIPT
			}
		]
	},
	{
		id: 2,
		name: "Merge Sort",
		function: mergeSort,
		description: strings.MERGE_SORT_DESCRIPTION,
		inDepthExplanation: strings.MERGE_SORT_INDEPTH_EXPLANATION,
		pseudocode: strings.MERGE_SORT_PSEUDOCODE,
		implementations: [
			{
				language: "Python",
				code: strings.MERGE_SORT_PYTHON
			},
			{
				language: "JavaScript",
				code: strings.MERGE_SORT_JAVASCRIPT
			}
		]

	},
	{
		id: 3,
		name: "Quick Sort",
		function: quickSort,
		description: strings.QUICK_SORT_DESCRIPTION,
		inDepthExplanation: strings.QUICK_SORT_INDEPTH_EXPLANATION,
		pseudocode: strings.QUICK_SORT_PSEUDOCODE,
		implementations: [
			{
				language: "Python",
				code: strings.QUICK_SORT_PYTHON
			},
			{
				language: "JavaScript",
				code: strings.QUICK_SORT_JAVASCRIPT
			}
		]

	},
	{
		id: 4,
		name: "Heap Sort",
		function: heapSort,
		description: strings.HEAP_SORT_DESCRIPTION,
		inDepthExplanation: strings.HEAP_SORT_INDEPTH_EXPLANATION,
		pseudocode: strings.HEAP_SORT_PSEUDOCODE,
		implementations: [
			{
				language: "Python",
				code: strings.HEAP_SORT_PYTHON
			},
			{
				language: "JavaScript",
				code: strings.HEAP_SORT_JAVASCRIPT
			}
		]

	},
];
