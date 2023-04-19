import { mergeSort, quickSort, heapSort, bubbleSort } from '../components/Algorithms/SortingAlgorithms/SortingAlgorithms';
import * as strings from './strings';


// JSON_STRUCTURE = {
// 	name: "",
// 	description: "",
// 	inDepthExplanation: "",
// 	pseudocode: "",
// 	implementations: [
// 		{
// 			language: "",
// 			code: ""
// 		},
// 	],
// }


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
		description: strings.MERGE_SORT_DESCRIPTION,
		function: mergeSort,
	},
	{
		id: 3,
		name: "Quick Sort",
		description: strings.QUICK_SORT_DESCRIPTION,
		function: quickSort,
	},
	{
		id: 4,
		name: "Heap Sort",
		description: strings.HEAP_SORT_DESCRIPTION,
		function: heapSort,
	},
];
