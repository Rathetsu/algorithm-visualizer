import React, { useState, useEffect } from 'react';
import './SortingVisualizer.css';

const SortingVisualizer = () => {
	const [array, setArray] = useState([]);

	const generateRandomArray = () => {
		const newArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * (1000 - 20 + 1) + 20));
		setArray(newArray);
	};

	useEffect(() => {
		generateRandomArray();
	}, []);

	const Bar = ({ value }) => (
		<div
			className="bar"
			style={{
				height: `${value}px`,
				backgroundColor: 'turquoise',
			}}
		></div>
	);

	return (
		<div className="sorting-visualizer">
			<div className="array-container">
				{array.map((value, idx) => (
					<Bar key={idx} value={value} />
				))}
			</div>
			<button className="generate-button" onClick={generateRandomArray}>
				Generate New Array
			</button>
		</div>
	);
};

export default SortingVisualizer;
