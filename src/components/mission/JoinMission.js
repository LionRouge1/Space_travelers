import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayJoined } from '../../redux/actions/mission';

const JoinMission = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayJoined());
  }, [dispatch]);
  const joined = useSelector((state) => state.missions.Profile);
  return (
    <div className="joined">
      <h2 className="heading">Joined Missions</h2>
      <ol>
        {
          joined.map(({ missionId, missionName }) => (
            <li key={missionId}>
              {missionName}
            </li>
          ))
        }
      </ol>
    </div>
  );
};

export default JoinMission;
