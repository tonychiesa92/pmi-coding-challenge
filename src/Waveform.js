import React from 'react';

const Waveform = (props) => {

	return (
		// Sample SVG along with mapping over the generate function to get the points
		<>
			<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
				<path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
			</svg>

			<ul className="list-group">
				{props.points.map(item => (
					<li className="list-group-item" key={item.points}>
						{item.points}
					</li>
				))}
			</ul>
		</>
	);
};

export default Waveform;