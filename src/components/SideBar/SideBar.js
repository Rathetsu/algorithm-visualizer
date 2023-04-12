import React, { useState } from 'react';
import './SideBar.css';

const SideBar = ({ algorithms, onSelectAlgorithm, onGenerateNewArray }) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
			<button className="toggle-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
				{isCollapsed ? '>' : '<'}
			</button>
			<button className="generate-button" onClick={onGenerateNewArray}>
				Generate New Array
			</button>
			<div className="algorithms">
				{algorithms.map((algorithm) => (
					<button key={algorithm.id} onClick={() => onSelectAlgorithm(algorithm.id)}>
						{algorithm.name}
					</button>
				))}
			</div>
		</div>
	);
};

export default SideBar;
