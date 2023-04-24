import React, { useState } from "react";
import CodeBlock from "../CodeBlock/CodeBlock";
import "./AlgoCompass.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import remarkMath from 'remark-math';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
				language={implementation.language.toLowerCase()}
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
								<p className="card-text">
									<ReactMarkdown
										remarkPlugins={[remarkGfm, remarkMath]}
										rehypePlugins={[rehypeKatex]}
										children={algorithm.inDepthExplanation}
										components={{
											code({ node, inline, className, children, ...props }) {
												const match = /language-(\w+)/.exec(className || '');
												return !inline && match ? (
													<SyntaxHighlighter
														children={String(children).replace(/\n$/, '')}
														style={a11yDark}
														PreTag='section'
														language={match[1]}
														{...props}
													/>
												) : (
													<code
														className={`inline-code ${className}`}
														{...props}
													>
														{children}
													</code>
												);
											}
										}}
									/>
								</p>
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
