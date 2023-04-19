
// 1. Merge Sort

export function mergeSort(arr) {
	const array = [...arr];
	const steps = [];
	mergeSortHelper(array, 0, array.length - 1, steps);
	return steps;
}

function mergeSortHelper(arr, start, end, steps) {
	if (start < end) {
		const mid = Math.floor((start + end) / 2);
		mergeSortHelper(arr, start, mid, steps);
		mergeSortHelper(arr, mid + 1, end, steps);
		merge(arr, start, mid, end, steps);
	}
}

function merge(arr, start, mid, end, steps) {
	const left = arr.slice(start, mid + 1);
	const right = arr.slice(mid + 1, end + 1);

	let i = 0;
	let j = 0;
	let k = start;

	while (i < left.length && j < right.length) {
		steps.push({ type: 'compare', first: start + i, second: mid + 1 + j });

		if (left[i] <= right[j]) {
			steps.push({ type: 'overwrite', index: k, value: left[i] });
			arr[k] = left[i];
			i++;
		} else {
			steps.push({ type: 'overwrite', index: k, value: right[j] });
			arr[k] = right[j];
			j++;
		}
		k++;
	}

	while (i < left.length) {
		steps.push({ type: 'overwrite', index: k, value: left[i] });
		arr[k] = left[i];
		i++;
		k++;
	}

	while (j < right.length) {
		steps.push({ type: 'overwrite', index: k, value: right[j] });
		arr[k] = right[j];
		j++;
		k++;
	}
}




// ================================================================================================================================== //


// 2. Quick Sort

export function quickSort(arr, start = 0, end = arr.length - 1, steps = []) {
	const arrayCopy = [...arr];
	quickSortHelper(arrayCopy, start, end, steps);
	return steps;
}

function quickSortHelper(arr, start, end, steps) {
	if (start < end) {
		const pivotIndex = partition(arr, start, end, steps);
		quickSortHelper(arr, start, pivotIndex - 1, steps);
		quickSortHelper(arr, pivotIndex + 1, end, steps);
	}
}

function partition(arr, start, end, steps) {
	const pivot = arr[end];
	let i = start;
	let j = end - 1;

	while (i <= j) {
		while (i <= j) {
			steps.push({ type: 'compare', first: i, second: end });
			if (arr[i] > pivot) {
				break;
			}
			i++;
		}

		while (i <= j) {
			steps.push({ type: 'compare', first: j, second: end });
			if (arr[j] <= pivot) {
				break;
			}
			j--;
		}

		if (i <= j) {
			steps.push({ type: 'swap', first: i, second: j });
			[arr[i], arr[j]] = [arr[j], arr[i]];
			i++;
			j--;
		}
	}

	steps.push({ type: 'swap', first: i, second: end });
	[arr[i], arr[end]] = [arr[end], arr[i]];

	return i;
}

// ================================================================================================================================== //


// 3. Heap Sort

export function heapSort(arr) {
	const array = [...arr];
	const steps = [];

	const heapify = (arr, n, i) => {
		let largest = i;
		let left = 2 * i + 1;
		let right = 2 * i + 2;

		if (left < n) {
			steps.push({ type: 'compare', first: left, second: largest });
			if (arr[left] > arr[largest]) {
				largest = left;
			}
		}

		if (right < n) {
			steps.push({ type: 'compare', first: right, second: largest });
			if (arr[right] > arr[largest]) {
				largest = right;
			}
		}

		if (largest !== i) {
			steps.push({ type: 'swap', first: i, second: largest });
			[arr[i], arr[largest]] = [arr[largest], arr[i]];
			heapify(arr, n, largest);
		}
	};

	const buildHeap = (arr) => {
		let n = arr.length;
		for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
			heapify(arr, n, i);
		}
	};

	const sortHeap = (arr) => {
		let n = arr.length;
		for (let i = n - 1; i > 0; i--) {
			steps.push({ type: 'swap', first: 0, second: i });
			[arr[0], arr[i]] = [arr[i], arr[0]];
			heapify(arr, i, 0);
		}
	};

	buildHeap(array);
	sortHeap(array);

	return steps;
}



// ================================================================================================================================== //


// 4. Bubble Sort

export function bubbleSort(arr) {
	const array = [...arr];
	const steps = [];

	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			steps.push({ type: 'compare', first: j, second: j + 1 });
			if (array[j] > array[j + 1]) {
				steps.push({ type: 'swap', first: j, second: j + 1 });
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
			}
		}
	}
	return steps;
}


// ================================================================================================================================== //
