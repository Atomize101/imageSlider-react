import React, { useState } from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import './App.css';

//https://pixabay.com/api/

export default function App() {
	const [query, setQuery] = useState('');

	const runQuery = () => {
		fetch(`https://pixabay.com/api/?key=18830221-77b301a5cf4c8541d672fa5ad&q=pizza`);
	};
	return (
		<div>
			<input onChange={(e) => setQuery(e.target.value)} />
			<button onClick={runQuery}>Search</button>
		</div>
	);
}
