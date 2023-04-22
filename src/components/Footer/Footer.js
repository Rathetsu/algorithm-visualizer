import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						{/* <h4>Algorithm Visualizer</h4> */}
						<ul className="list-unstyled">
							<li>
								<a
									href="https://github.com/Rathetsu/algorithm-visualizer"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: '#fff' }}
								>
									GitHub Repository
								</a>
							</li>
							{/* Add other relevant resources later */}
						</ul>
					</div>
					<div className="col-md-6 text-end">
						{/* <a href="https://twitter.com/AhmedEzzatMuh" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-twitter"></i>
						</a> */}
						<a
							href="https://linkedin.com/in/AhmedEzzatMuh"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-linkedin"></i>
						</a>
						<a
							href="https://github.com/Rathetsu"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-github"></i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
