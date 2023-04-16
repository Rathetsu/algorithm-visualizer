
// 1. Merge Sort

export function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let result = [];
	let i = 0;
	let j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			result.push(left[i]);
			i++;
		} else {
			result.push(right[j]);
			j++;
		}
	}

	return result.concat(left.slice(i)).concat(right.slice(j));
}


// ================================================================================================================================== //


// 2. Quick Sort

export function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		const pivotIndex = partition(arr, left, right);
		quickSort(arr, left, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

function partition(arr, left, right) {
	const pivot = arr[right];
	let i = left;

	for (let j = left; j < right; j++) {
		if (arr[j] < pivot) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
			i++;
		}
	}

	[arr[i], arr[right]] = [arr[right], arr[i]];
	return i;
}

// ================================================================================================================================== //


// 3. Heap Sort

export function heapSort(arr) {
	buildMaxHeap(arr);

	for (let i = arr.length - 1; i > 0; i--) {
		[arr[0], arr[i]] = [arr[i], arr[0]];
		siftDown(arr, 0, i);
	}

	return arr;
}

function buildMaxHeap(arr) {
	const firstNonLeafIndex = Math.floor(arr.length / 2) - 1;

	for (let i = firstNonLeafIndex; i >= 0; i--) {
		siftDown(arr, i, arr.length);
	}
}

function siftDown(arr, start, end) {
	let root = start;

	while (root * 2 + 1 < end) {
		let child = root * 2 + 1;
		let swap = root;

		if (arr[swap] < arr[child]) {
			swap = child;
		}

		if (child + 1 < end && arr[swap] < arr[child + 1]) {
			swap = child + 1;
		}

		if (swap !== root) {
			[arr[root], arr[swap]] = [arr[swap], arr[root]];
			root = swap;
		} else {
			return;
		}
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
