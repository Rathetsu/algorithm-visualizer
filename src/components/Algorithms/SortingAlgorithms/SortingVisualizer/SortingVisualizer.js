import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import useD3 from '../../../../hooks/useD3';
import './SortingVisualizer.css';
import SideBar from '../../../SideBar/SideBar';
import AlgoCompass from '../../../AlgoCompass/AlgoCompass';
import * as strings from '../../../../assets/strings';
import { mergeSort, quickSort, heapSort, bubbleSort } from '../SortingAlgorithms';

const SortingVisualizer = () => {
	const [array, setArray] = useState([]);
	const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);
	// const [sorting, setSorting] = useState(false);

	const generateRandomArray = () => {
		let max = 1000
		let min = 20
		const newArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * (max - min + 1) + min));
		setArray(newArray);
	};

	const startSorting = () => {
		// setSorting(true);
		animateSorting(selectedAlgorithm.function, array, 50)
			.then((sortedArray) => {
				setArray(sortedArray);
				// setSorting(false);
			})
			.catch((error) => {
				console.error('Error during sorting:', error);
				// setSorting(false);
			});
	};

	const animateSorting = (steps, animationSpeed = 50) => {
		console.log(steps)
		if (steps.length === 0) return;

		const svg = d3.select(ref.current);
		const bars = svg.selectAll('.bar');

		const margin = { top: 20, right: 20, bottom: 30, left: 40 };
		// const width = 960 - margin.left - margin.right;
		const height = 500 - margin.top - margin.bottom;

		const y = d3.scaleLinear().range([height, 0]);
		y.domain([0, d3.max(array)]);

		let i = 0;
		const interval = setInterval(() => {
			const step = steps[i];

			if (step.type === 'compare') {
				bars
					.filter((_, idx) => idx === step.first || idx === step.second)
					.transition()
					.duration(animationSpeed / 2)
					.style('fill', 'red');
			} else if (step.type === 'swap') {
				// Swap the array values
				[array[step.first], array[step.second]] = [array[step.second], array[step.first]];

				// Update the bar positions
				bars
					.data(array)
					.transition()
					.duration(animationSpeed / 2)
					.attr('y', (d) => y(d))
					.attr('height', (d) => height - y(d))
					.style('fill', 'steelblue');
			}

			i++;

			if (i >= steps.length) {
				clearInterval(interval);

				// Reset bar colors after sorting is finished
				bars
					.transition()
					.duration(animationSpeed / 2)
					.delay((_, idx) => idx * 10)
					.style('fill', 'steelblue');
			}
		}, animationSpeed);
	};

	useEffect(() => {
		generateRandomArray();
	}, []);

	const ref = useD3(
		(svg) => {
			const margin = { top: 20, right: 20, bottom: 30, left: 40 };
			const width = 960 - margin.left - margin.right;
			const height = 500 - margin.top - margin.bottom;

			svg.selectAll('*').remove();

			const x = d3.scaleBand().range([0, width]).padding(0.3);
			const y = d3.scaleLinear().range([height, 0]);

			const g = svg
				.append('g')
				.attr('transform', `translate(${margin.left},${margin.top})`);

			x.domain(array.map((_, i) => i));
			y.domain([0, d3.max(array)]);

			g.selectAll('.bar')
				.data(array)
				.enter()
				.append('rect')
				.attr('class', 'bar')
				.attr('x', (_, i) => x(i))
				.attr('y', (d) => y(d))
				.attr('width', x.bandwidth())
				.attr('height', (d) => height - y(d));
		},
		[array]
	);

	// Algorithms data
	const algorithms = [
		{ id: 1, name: 'Bubble Sort', description: strings.BUBBLE_SORT_DESCRIPTION, function: bubbleSort },
		{ id: 2, name: 'Merge Sort', description: strings.MERGE_SORT_DESCRIPTION, function: mergeSort },
		{ id: 3, name: 'Quick Sort', description: strings.QUICK_SORT_DESCRIPTION, function: quickSort },
		{ id: 4, name: 'Heap Sort', description: strings.HEAP_SORT_DESCRIPTION, function: heapSort },
	];

	const handleSelectAlgorithm = (algorithmId) => {
		const selectedAlgo = algorithms.find((algo) => algo.id === algorithmId);
		setSelectedAlgorithm(selectedAlgo);
		// const sortingSteps = selectedAlgo.function(array.slice());
		// animateSorting(sortingSteps, 5);
	};



	return (
		<div className='sorting-visualizer'>
			<SideBar
				algorithms={algorithms}
				onSelectAlgorithm={handleSelectAlgorithm}
				onGenerateNewArray={generateRandomArray}
			/>
			<div className='visualizer-and-compass-container'>
				<div className='visualizer-container'>
					<svg
						ref={ref}
						width='960'
						height='500'
						className='sorting-visualizer-svg'
					></svg>

					{selectedAlgorithm && (
						<div className="algo-compass-container">
							<AlgoCompass algorithm={selectedAlgorithm} />
						</div>
					)}
				</div>
				<div className="sorting-button-container">
					<button
						className='`btn sorting-button ${!selectedAlgorithm ? "disabled" : ""}`'
						onClick={startSorting}
						disabled={!selectedAlgorithm}
						style={{ alignSelf: "center" }}
					>
						Start Sorting
					</button>
				</div>

			</div>
		</div>
	);
};

export default SortingVisualizer;
