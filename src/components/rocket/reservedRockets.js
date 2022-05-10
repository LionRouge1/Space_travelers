import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  // eslint-disable-next-line max-len
  const rockets = useSelector((state) => state.rockets.list.filter((rocket) => rocket.reserved === true));

  return (
    <>
      <div className='reservedRocketContainer'>
        <h2 className='heading'>Reserved Rockets</h2>
        <ul className='reservedRockets'>
          {rockets.map((rocket) => (
            <li key={rocket.id} className='reservedRocket'>
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ReservedRockets;
