import React from 'react';

export default function ImageSlider({ images }) {
	return (
		images.length > 0 && (
			<div>
				<button>{'<'}</button>
				<img src={images[0]} />
				<button>{'>'}</button>
			</div>
		)
	);
}
