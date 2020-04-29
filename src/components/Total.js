import React from 'react';
import { useSelector } from 'react-redux';

const Total = props => {
  // useSelector allows we "select" data from state, 
  // the function we give to useSelector is a selector function 
  // take the state and return some value we want from state
  const car = useSelector((state) => {
    return state.car;
  })
  // selector is a function take the state and return some value we want from state
  const additionalPrice = useSelector((state) => {
    return state.additionalPrice;
  })

  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

export default Total;
