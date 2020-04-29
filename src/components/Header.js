import React from 'react';
import { useSelector } from 'react-redux';
const Header = props => {
  // selector is a function take the state and return some value we want from state
  const car = useSelector((state) => {
    return state.car;
  })
  return (
    <>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </>
  );
};

export default Header;
