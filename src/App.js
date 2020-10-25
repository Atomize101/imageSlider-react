import React, { useState } from 'react';
import './App.css';
import ImageSlider from './ImageSlider';

//https://pixabay.com/api/

export default function App() {
	const [query, setQuery] = useState('');
	const [images, setImages] = useState([]);

	const runQuery = () => {
		fetch(`https://pixabay.com/api/?key=18830221-77b301a5cf4c8541d672fa5ad&q=${query}`).then((response) =>
			response
				.json()
				.then(({ hits }) => hits.map(({ webformatURL }) => webformatURL))
				.then(setImages)
		);
	};

	return (
		<div>
			<div>
				<input onChange={(e) => setQuery(e.target.value)} />
				<button onClick={runQuery}>Search</button>
			</div>
			<ImageSlider images={images} />
		</div>
	);
}
