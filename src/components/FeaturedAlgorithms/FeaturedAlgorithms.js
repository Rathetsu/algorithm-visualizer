import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedAlgorithms.css';
import * as strings from '../../assets/strings';

const FeaturedAlgorithms = () => {
	const algorithms = [
		{
			id: 'sorting-algorithms',
			title: 'Sorting Algorithms',
			description: strings.SORTING_ALGORITHMS_DESCRIPTION,
			image: require('../../assets/Algorithms/sorting-algorithms-image.png')

		},
		{
			id: 'pathfinding-algorithms',
			title: 'Path Finding Algorithms',
			description: strings.PATHFINDING_ALGORITHMS_DESCRIPTION,
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
