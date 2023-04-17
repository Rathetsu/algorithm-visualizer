
// 1. Merge Sort

export function mergeSort(arr, start = 0, end = arr.length - 1, steps = []) {
	if (start < end) {
		const middle = Math.floor((start + end) / 2);
		mergeSort(arr, start, middle, steps);
		mergeSort(arr, middle + 1, end, steps);
		merge(arr, start, middle, end, steps);
	}
	return steps;
}

function merge(arr, start, middle, end, steps) {
	const left = arr.slice(start, middle + 1);
	const right = arr.slice(middle + 1, end + 1);
	let i = 0;
	let j = 0;
	let k = start;

	while (i < left.length && j < right.length) {
		steps.push({ type: 'compare', first: start + i, second: middle + 1 + j });
		if (left[i] <= right[j]) {
			steps.push({ type: 'swap', first: k, second: start + i });
			arr[k++] = left[i++];
		} else {
			steps.push({ type: 'swap', first: k, second: middle + 1 + j });
			arr[k++] = right[j++];
		}
	}

	while (i < left.length) {
		steps.push({ type: 'compare', first: start + i, second: middle + 1 + j });
		steps.push({ type: 'swap', first: k, second: start + i });
		arr[k++] = left[i++];
	}

	while (j < right.length) {
		steps.push({ type: 'compare', first: start + i, second: middle + 1 + j });
		steps.push({ type: 'swap', first: k, second: middle + 1 + j });
		arr[k++] = right[j++];
	}
}



// ================================================================================================================================== //


// 2. Quick Sort

export function quickSort(arr, start = 0, end = arr.length - 1, steps = []) {
	if (start < end) {
		const pivotIndex = partition(arr, start, end, steps);
		quickSort(arr, start, pivotIndex - 1, steps);
		quickSort(arr, pivotIndex + 1, end, steps);
	}
	return steps;
}

function partition(arr, start, end, steps) {
	const pivot = arr[end];
	let pivotIndex = start;

	for (let i = start; i < end; i++) {
		steps.push({ type: 'compare', first: i, second: end });
		if (arr[i] < pivot) {
			steps.push({ type: 'swap', first: i, second: pivotIndex });
			[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
			pivotIndex++;
		}
	}

	steps.push({ type: 'swap', first: pivotIndex, second: end });
	[arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
	return pivotIndex;
}


// ================================================================================================================================== //


// 3. Heap Sort

export function heapSort(arr, steps = []) {
	let n = arr.length;

	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(arr, n, i, steps);
	}

	for (let i = n - 1; i > 0; i--) {
		steps.push({ type: 'compare', first: 0, second: i });
		steps.push({ type: 'swap', first: 0, second: i });
		[arr[0], arr[i]] = [arr[i], arr[0]];
		heapify(arr, i, 0, steps);
	}

	return steps;
}

function heapify(arr, n, i, steps) {
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
		heapify(arr, n, largest, steps);
	}
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
