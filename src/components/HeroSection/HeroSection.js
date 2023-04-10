import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
	return (
		<div className="hero jumbotron jumbotron-fluid text-center">
			<div className="container">
				<h1 className="hero-title display-4">Learn Algorithms Through Visualization</h1>
				<p className="hero-description lead">Explore and understand algorithms with interactive visual demonstrations, pseudocode, and code samples.</p>
				<Link className="btn btn-primary btn-lg" to="/algorithms">Get Started</Link>
			</div>
		</div>
	);
};

export default HeroSection;
