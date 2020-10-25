import React from 'react';

export default function ImageSlider({ images }) {
	return images.length > 0 && <img src={images[0]} />;
}
