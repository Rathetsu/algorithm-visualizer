import './SideBar.css';

const SideBar = ({ algorithms, onSelectAlgorithm, onGenerateNewArray }) => {

	return (
		<div className={'sidebar'}>
			<button className="generate-button" onClick={onGenerateNewArray}>
				Generate New Array
			</button>
			<div className="algorithms">
				{algorithms.map((algorithm) => (
					<button key={algorithm.id} onClick={() => onSelectAlgorithm(algorithm.id)}>
						{algorithm.name}
					</button>
				))}
			</div>
		</div>
	);
};

export default SideBar;
