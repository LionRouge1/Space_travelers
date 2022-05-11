import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayRockets } from '../../redux/actions/rocket';
import Rocket from './rocket';

const RocketList = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(displayRockets());
  }, []);

  return (
    <>
      <div className='rocketListContainer'>
        {rockets.map((rocket) => (
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
