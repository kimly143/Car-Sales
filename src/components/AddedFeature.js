import React from 'react';
import { useDispatch } from 'react-redux';
const AddedFeature = (props) => {
	const dispatch = useDispatch(); // store.dispatch

	return (
		<li>
			{/* Add an onClick to run a function to remove a feature */}
			<button
				className="button"
				onClick={() => {
					dispatch({ type: 'REMOVE_FEATURE', id: props.feature.id });
				}}
			>
				X
			</button>
			{props.feature.name}
		</li>
	);
};

export default AddedFeature;
