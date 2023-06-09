import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturedAlgorithms from './components/FeaturedAlgorithms/FeaturedAlgorithms';
import Footer from './components/Footer/Footer';
import SortingVisualizer from './components/Algorithms/SortingAlgorithms/SortingVisualizer/SortingVisualizer';
import PathfindingVisualizer from './components/Algorithms/PathfindingAlgorithms/PathfindingVisualizer/PathfindingVisualizer';
import GraphVisualizer from './components/Algorithms/GraphAlgorithms/GraphVisualizer/GraphVisualizer';

function App() {
	return (
		<Router>
			<div className="App d-flex flex-column min-vh-100">
				<main className="flex-grow-1">
					<Routes>
						<Route path='/algorithm-visualizer/' element={<NavBar />} >
							<Route path='/algorithm-visualizer/' element={<><HeroSection /><FeaturedAlgorithms /></>} />

							<Route path='/algorithm-visualizer/sorting-algorithms' element={<SortingVisualizer />} />
							<Route path='/algorithm-visualizer/pathfinding-algorithms' element={<PathfindingVisualizer />} />
							<Route path='/algorithm-visualizer/graph-algorithms' element={<GraphVisualizer />} />

						</Route>
					</Routes>
				</main>
				<Outlet />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
