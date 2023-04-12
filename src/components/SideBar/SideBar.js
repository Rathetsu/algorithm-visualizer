import React, { useState } from 'react';
import './SideBar.css';

const SideBar = ({ algorithms, onSelectAlgorithm }) => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	return (
		<div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
			<button className="toggle-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
				{isCollapsed ? '>' : '<'}
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
