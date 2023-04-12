import React from 'react';
import './AlgoCompass.css';

const AlgoCompass = ({ algorithm }) => {
	return (
		<div className="algo-compass">
			<h2>{algorithm.name}</h2>
			<p>{algorithm.description}</p>
			{/* Add code and other information here */}
		</div>
	);
};

export default AlgoCompass;
