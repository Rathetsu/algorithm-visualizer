import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import useD3 from '../../../../hooks/useD3';
import './SortingVisualizer.css';
import SideBar from '../../../SideBar/SideBar';
import AlgoCompass from '../../../AlgoCompass/AlgoCompass';
import { BUBBLE_SORT_DESCRIPTION, MERGE_SORT_DESCRIPTION, HEAP_SORT_DESCRIPTION, QUICK_SORT_DESCRIPTION } from '../../../../assets/Algorithms/strings';


const SortingVisualizer = () => {
	const [array, setArray] = useState([]);
	const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);

	const generateRandomArray = () => {
		const newArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * (1000 - 20 + 1) + 20));
		setArray(newArray);
	};

	useEffect(() => {
		generateRandomArray();
	}, []);

	const ref = useD3((svg) => {
		const margin = { top: 20, right: 20, bottom: 30, left: 40 };
		const width = 960 - margin.left - margin.right;
		const height = 500 - margin.top - margin.bottom;

		svg.selectAll('*').remove();

		const x = d3.scaleBand().range([0, width]).padding(0.3);
		const y = d3.scaleLinear().range([height, 0]);

		const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

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
	}, [array]);

	// Algorithms data
	const algorithms = [
		{ id: 1, name: 'Bubble Sort', description: BUBBLE_SORT_DESCRIPTION },
		{ id: 2, name: 'Merge Sort', description: MERGE_SORT_DESCRIPTION },
		{ id: 3, name: 'Quick Sort', description: QUICK_SORT_DESCRIPTION },
		{ id: 4, name: 'Heap Sort', description: HEAP_SORT_DESCRIPTION },
	];

	const handleSelectAlgorithm = (algorithmId) => {
		const algorithm = algorithms.find((algo) => algo.id === algorithmId);
		setSelectedAlgorithm(algorithm);
	};

	return (
		<div className="sorting-visualizer">
			<SideBar algorithms={algorithms} onSelectAlgorithm={handleSelectAlgorithm} onGenerateNewArray={generateRandomArray} />
			<div className="visualizer-container">
				<svg ref={ref} width="960" height="500" className="sorting-visualizer-svg"></svg>
				{selectedAlgorithm && <AlgoCompass algorithm={selectedAlgorithm} />}
			</div>
		</div>
	);
};

export default SortingVisualizer;