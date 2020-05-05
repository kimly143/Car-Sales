export const initialState = {
	additionalPrice: 0,
	car: {
		price: 26395,
		name: '2019 Ford Mustang',
		image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
		features: []
	},
	additionalFeatures: [
		{ id: 1, name: 'V-6 engine', price: 1500 },
		{ id: 2, name: 'Racing detail package', price: 1500 },
		{ id: 3, name: 'Premium sound system', price: 500 },
		{ id: 4, name: 'Rear spoiler', price: 250 }
	]
};

export default function reducer(state, action) {
	let feature;
	switch (action.type) {
		case 'ADD_FEATURE':
			// f is the feature object
			// find() return the object when return is true.
			feature = state.additionalFeatures.find((f) => {
				return f.id === action.id;
			});
			return {
				...state,
				additionalPrice: state.additionalPrice + feature.price,
				car: {
					...state.car,
					features: [ ...state.car.features, feature ]
				},
				additionalFeatures: state.additionalFeatures.filter((f) => {
					//keep addional feature that not selected.
					return f.id !== action.id;
				})
			};
		case 'REMOVE_FEATURE':
			// f is the feature object
			// find() return the object when return is true.
			feature = state.car.features.find((f) => {
				return f.id === action.id;
			});
			return {
				...state,
				additionalPrice: state.additionalPrice - feature.price,
				car: {
					...state.car,
					features: state.car.features.filter((f) => {
                        //keep feature that not selected.
                        return f.id !== action.id;
                    })
                },
                //add the feature got removed back to the additional features list
                additionalFeatures: [ ...state.additionalFeatures, feature ]
			};
		default:
			return state;
	}
}
