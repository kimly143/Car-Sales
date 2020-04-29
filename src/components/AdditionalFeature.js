import React from 'react';
import { useDispatch } from 'react-redux';
const AdditionalFeature = (props) => {
	const dispatch = useDispatch(); // store.dispatch

	return (
		<li>
			{/* Add an onClick that will let you add a feature to your car */}
			<button className="button" onClick={() => dispatch({ type: 'ADD_FEATURE', id: props.feature.id })}>
				Add
			</button>
			{props.feature.name} (+{props.feature.price})
		</li>
	);
};

export default AdditionalFeature;
