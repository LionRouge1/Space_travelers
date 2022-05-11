import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './rocket';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);

  if (rockets.loading) {
    return (
      <>
        <span>Page is Loading</span>
      </>
    );
  }
  if (rockets.error) {
    return (
      <>
        <span>Error!</span>
      </>
    );
  }


  return (
    <>
      <div className='rocketListContainer'>
        {rockets.list.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            name={rocket.name}
            description={rocket.description}
            image={rocket.image}
            reserved={rocket.reserved}
          />
        ))}
      </div>
    </>
  );
};

export default RocketList;
