import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import useD3 from '../../../../hooks/useD3';
import './SortingVisualizer.css';
import SideBar from '../../../SideBar/SideBar';
import AlgoCompass from '../../../AlgoCompass/AlgoCompass';
import { sortingAlgorithms } from '../../../../utils/AlgorithmsData';

const SortingVisualizer = () => {
	const [array, setArray] = useState([]);
	const [selectedAlgorithm, setSelectedAlgorithm] = useState(sortingAlgorithms[0]);
	const animationSpeed = useRef(50);
	const [sliderValue, setSliderValue] = useState(150 - animationSpeed.current + 1);

	const generateRandomArray = () => {
		let max = 1000
		let min = 20
		const newArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * (max - min + 1) + min));
		setArray(newArray);
	};


	const startSorting = () => {
		animateSorting(selectedAlgorithm.function(array), ref);
	};

	const animateSorting = (steps, ref) => {
		console.log('steps: ', steps);
		if (steps.length === 0) return;

		const svg = d3.select(ref.current);
		const bars = svg.selectAll('.bar');

		const margin = { top: 20, right: 20, bottom: 30, left: 40 };
		const height = 500 - margin.top - margin.bottom;

		const y = d3.scaleLinear().range([height, 0]);
		y.domain([0, d3.max(array)]);

		let i = 0;

		const stepExecution = () => {
			const step = steps[i];

			if (step.type === 'compare') {
				bars
					.filter((_, idx) => idx === step.first || idx === step.second)
					.transition()
					.duration(animationSpeed.current)
					.style('fill', 'red');
			} else if (step.type === 'swap') {
				// Swap the array values
				[array[step.first], array[step.second]] = [array[step.second], array[step.first]];

				// Update the bar positions
				bars
					.data(array)
					.transition()
					.duration(animationSpeed.current)
					.attr('y', (d) => y(d))
					.attr('height', (d) => height - y(d))
					.style('fill', 'steelblue')
					.on('end', (_, idx) => {
						if (idx === step.first || idx === step.second) {
							d3.select(bars.nodes()[idx]).style('fill', 'steelblue');
						}
					});
			} else if (step.type === 'overwrite') {
				// Update the value in the array
				array[step.index] = step.value;

				// Update the bar height and reset the color
				bars
					.data(array)
					.transition()
					.duration(animationSpeed.current)
					.attr('y', (d) => y(d))
					.attr('height', (d) => height - y(d))
					.style('fill', (_, idx) => (idx === step.index ? 'green' : 'steelblue'));
			}

			i++;

			if (i < steps.length) {
				setTimeout(stepExecution, animationSpeed.current * 2);
			}

		};

		setTimeout(stepExecution, animationSpeed.current * 2)
	};

	const onChangeSlider = (event) => {
		const max = 150;
		let speed = max - event.target.value + 1;
		console.log('speed: ', speed);
		animationSpeed.current = speed;
		setSliderValue(event.target.value);
	}

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
				.attr('fill', '#7aa0c4')
				.attr('x', (_, i) => x(i))
				.attr('y', (d) => y(d))
				.attr('width', x.bandwidth())
				.attr('height', (d) => height - y(d));
		},
		[array]
	);

	const handleSelectAlgorithm = (algorithmId) => {
		const selectedAlgo = sortingAlgorithms.find((algo) => algo.id === algorithmId);
		setSelectedAlgorithm(selectedAlgo);
		generateRandomArray();
	};

	return (
		<div className='sorting-visualizer'>
			<div className='d-flex'>
				<SideBar
					algorithms={sortingAlgorithms}
					onSelectAlgorithm={handleSelectAlgorithm}
					onGenerateNewArray={generateRandomArray}
				/>
				<div className='d-flex flex-column'>
					<div className='top-container'>
						<div className='visualizer-container'>
							<svg
								ref={ref}
								width='960'
								height='500'
								className='sorting-visualizer-svg'
							></svg>
						</div>
						<div className="sorting-button-container">
							<button
								// eslint-disable-next-line
								className='`btn sorting-button large-button ${!selectedAlgorithm ? "disabled" : ""}`'
								onClick={startSorting}
								disabled={!selectedAlgorithm}
								style={{ alignSelf: "center" }}
							>
								<span className="large-button-text">Start Sorting</span>
							</button>
							<div className="animation-speed-slider-container d-flex align-items-center my-3">
								<span className="slider-label">Animation Speed</span>
								<input
									type="range"
									className="form-range"
									min="1"
									max="150"
									value={sliderValue}
									id="animation-speed-slider"
									onChange={onChangeSlider}
								/>
							</div>
						</div>
					</div>

					<div className='algo-compass-container'>
						{selectedAlgorithm && (
							<AlgoCompass
								algorithm={selectedAlgorithm}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SortingVisualizer;
