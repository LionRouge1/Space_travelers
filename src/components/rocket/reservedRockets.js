import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  // eslint-disable-next-line max-len
  const rockets = useSelector((state) => state.rockets.list.filter((rocket) => rocket.reserved === true));

  return (
    <>
      <div className="reservedRocket">
        <h2 className="heading">Reserved Rockets</h2>
        <ol className="reservedRockets">
          {rockets.map((rocket) => (
            <li key={rocket.id}>
              {rocket.name}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default ReservedRockets;
