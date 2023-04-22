import React, { useState } from "react";
import CodeBlock from "../CodeBlock/CodeBlock";
import "./AlgoCompass.css";

const AlgoCompass = ({ algorithm }) => {
	const [selectedTab, setSelectedTab] = useState(
		algorithm.implementations && algorithm.implementations.length > 0
			? algorithm.implementations[0].language
			: ""
	);

	const renderCodeTabs = () => {
		return (
			<ul className="nav nav-tabs">
				{algorithm.implementations.map((impl, index) => (
					<li key={index} className="nav-item">
						<button
							className={`nav-link ${selectedTab === impl.language ? "active" : ""
								}`}
							onClick={() => setSelectedTab(impl.language)}
							style={{
								color: selectedTab === impl.language ? "#FFFFFF" : "#D3D3D3",
								backgroundColor:
									selectedTab === impl.language
										? "#4E5D6C"
										: "transparent",
							}}
						>
							{impl.language}
						</button>
					</li>
				))}
			</ul>
		);
	};

	const renderCodeContent = () => {
		const implementation = algorithm.implementations.find(
			(impl) => impl.language === selectedTab
		);
		if (!implementation) {
			return <p>No implementation available for {selectedTab}</p>;
		}
		return (
			<CodeBlock
				code={implementation.code}
				language={implementation.language}
			/>
		);
	};

	return (
		<div className="algo-compass">
			<div className="container">
				<div className="row gy-4">
					<div className="col-lg-12">
						<div className="card algo-card">
							<div className="card-body">
								<h2 className="card-title">{algorithm.name}</h2>
								<p className="card-text">{algorithm.description}</p>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="card algo-card">
							<div className="card-body">
								<h3 className="card-title">In-depth Explanation</h3>
								<p className="card-text">{algorithm.inDepthExplanation}</p>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="card algo-card">
							<div className="card-body">
								<h3 className="card-title">Pseudocode</h3>
								<CodeBlock code={algorithm.pseudocode} language="pseudo" />
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="card algo-card">
							<div className="card-body">
								<h3 className="card-title">Code Implementation</h3>
								<div className="code-tabs">{renderCodeTabs()}</div>
								<div className="code-content">{renderCodeContent()}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AlgoCompass;
