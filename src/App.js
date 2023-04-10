import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturedAlgorithms from './components/FeaturedAlgorithms/FeaturedAlgorithms';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
	return (
		<Router>
			<div className="App d-flex flex-column min-vh-100">
				<NavBar />
				<main className="flex-grow-1">
					<Routes>
						<Route path="/" element={<><HeroSection /><FeaturedAlgorithms /></>} />
						{/* Add other routes for Algorithms, About, and Contact pages */}
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
