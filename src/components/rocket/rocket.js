import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReserve } from '../../redux/actions/rocket';

const Rocket = (props) => {
  const {
    id, name, description, image, reserved,
  } = props;

  const dispatch = useDispatch();

  const reserveHandler = () => {
    dispatch(reserveRocket(id));
  };

  const cancelHandler = () => {
    dispatch(cancelReserve(id));
  };

  const cancelBtn = (
    <button
      type="button"
      className='cancelReserve'
      onClick={cancelHandler}
    >
      Cancel Reservation
    </button>
  );

  const reserveBtn = (
    <button
      type="button"
      className='reserveRocket'
      onClick={reserveHandler}
    >
      Reserve Rocket
    </button>
  );

  return (
    <>
      <div className='rocketCardContainer'>
        <div>
          <img src={image} alt="rocket" className='rocketImg' />
        </div>
        <div className='rocketDescription'>
          <h2>{name}</h2>
          <p>
            <span className='reserved'>
              {reserved ? 'Reserved' : ''}
            </span>
            {description}
          </p>
          {reserved ? cancelBtn : reserveBtn}
        </div>
      </div>
    </>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
