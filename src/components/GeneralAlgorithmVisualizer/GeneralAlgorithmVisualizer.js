import React from 'react';

const GeneralAlgorithmVisualizer = ({ algorithmName, children }) => {
	return (
		<div>
			<h2>{algorithmName} Visualizer</h2>
			{children}
		</div>
	);
};

export default GeneralAlgorithmVisualizer;
