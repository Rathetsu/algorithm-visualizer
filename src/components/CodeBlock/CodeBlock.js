import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code, language }) => {
	return (
		<SyntaxHighlighter
			language='javascript'
			style={a11yDark}
			showLineNumbers={true}
		>
			{code}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
