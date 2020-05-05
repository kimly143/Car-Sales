import React from 'react';
import { useSelector } from 'react-redux';
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  // selector is a function take the state and return some value we want from state
  const features = useSelector((state) => {
    return state.car.features;
  })
  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(item => (
            <AddedFeature key={item.id} feature={item} />

          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
