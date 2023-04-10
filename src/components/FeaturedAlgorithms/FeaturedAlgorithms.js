import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedAlgorithms.css';

const FeaturedAlgorithms = () => {
	const algorithms = [
		{
			id: 1,
			title: 'Bubble Sort',
			description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.',
			image: require('../../assets/Algorithms/bubble-sort.jpg')

		},
		{
			id: 2,
			title: 'Dijkstra\'s Algorithm',
			description: 'A graph search algorithm that solves the single-source shortest path problem for a graph with non-negative edge weights, producing a shortest-path tree.',
			image: require('../../assets/Algorithms/dijkstras.jpg')
		},
	];

	return (
		<div className="featured-algorithms container mt-5">
			<h2 className="text-center mb-4">Featured Algorithms</h2>
			<div className="row">
				{algorithms.map(algorithm => (
					<div className="col-md-4" key={algorithm.id}>
						<div className="card mb-4">
							<img className="card-img-top" src={algorithm.image} alt={algorithm.title} />
							<div className="card-body">
								<h3 className="card-title">{algorithm.title}</h3>
								<p className="card-text">{algorithm.description}</p>
								<Link className="btn btn-primary" to={`/algorithms/${algorithm.id}`}>View Algorithm</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FeaturedAlgorithms;
