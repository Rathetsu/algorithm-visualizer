import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedAlgorithms.css';

const FeaturedAlgorithms = () => {
	const algorithms = [
		{
			id: 'sorting-algorithms',
			title: 'Sorting Algorithms',
			description: 'Discover the fascinating realm of sorting algorithms through our engaging visualizers. Experience the magic of popular algorithms like Bubble Sort, Quick Sort, and Merge Sort, as they efficiently organize data in a specific order. Unravel the intricacies of these classic algorithms and enhance your understanding of their underlying principles.',
			image: require('../../assets/Algorithms/sorting-algorithms-image.png')

		},
		{
			id: 'pathfinding-algorithms',
			title: 'Path Finding Algorithms',
			description: 'Explore the world of path finding algorithms with our interactive visualizers. Dive into popular algorithms such as A* and Dijkstra\'s, and learn how they efficiently find the shortest path between two points in a graph. Unlock the secrets of these powerful algorithms and gain a deeper understanding of their inner workings.',
			image: require('../../assets/Algorithms/pathfinding-algorithms-image.jpg')
		},
	];

	return (
		<div className="featured-algorithms container mt-5">
			<div className="row">
				{algorithms.map(algorithm => (
					<div className="col-md-12 col-lg-11" key={algorithm.id}>
						<div className="card mb-4">
							<div className="row g-0" >
								<div className="col-md-4">
									<img className="card-img" src={algorithm.image} alt={algorithm.title} />
								</div>
								<div className="col-md-8" >
									<div className="card-body">
										<h3 className="card-title">{algorithm.title}</h3>
										<p className="card-text">{algorithm.description}</p>
										<Link className="btn btn-primary" to={`/algorithm-visualizer/${algorithm.id}`}>Explore Visualizers</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div >
	);
};

export default FeaturedAlgorithms;
