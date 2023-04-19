import React, { useState } from 'react';
import './AlgoCompass.css';

const AlgoCompass = ({ algorithm }) => {
	const [selectedTab, setSelectedTab] = useState(
		algorithm.implementations && algorithm.implementations.length > 0
			? algorithm.implementations[0].language
			: ''
	);

	const renderCodeTabs = () => {
		if (!algorithm.implementations || algorithm.implementations.length === 0) {
			return <p>No implementations available.</p>;
		}

		return algorithm.implementations.map((implementation) => (
			<button
				key={implementation.language}
				className={`code-tab ${selectedTab === implementation.language ? 'active' : ''}`}
				onClick={() => setSelectedTab(implementation.language)}
			>
				{implementation.language}
			</button>
		));
	};

	const renderCodeContent = () => {
		if (!algorithm.implementations || algorithm.implementations.length === 0) {
			return null;
		}

		const implementation = algorithm.implementations.find((impl) => impl.language === selectedTab);

		return (
			<pre>
				<code>{implementation.code}</code>
			</pre>
		);
	};

	return (
		<div className="algo-compass">
			<h2>{algorithm.name}</h2>
			<p>{algorithm.description}</p>
			<h3>In-depth Explanation</h3>
			<p>{algorithm.inDepthExplanation}</p>
			<h3>Pseudocode</h3>
			<pre>
				<code>{algorithm.pseudocode}</code>
			</pre>
			<h3>Code Implementation</h3>
			<div className="code-tabs">{renderCodeTabs()}</div>
			<div className="code-content">{renderCodeContent()}</div>
		</div>
	);
};

export default AlgoCompass;
