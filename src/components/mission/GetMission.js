import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMission, joinMission } from "../../redux/actions/mission";
import local from "../localStore";
import InsertMission from "./InsertMission";

const GetMission = () => {
  const missions  = useSelector((state) => state.missions.Missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  const handleClick = (e) => {
    const Local = local('missions', null);
    if (Local.includes(e.target.id)) {
      local('missions', Local.filter((x) => x !== e.target.id))
    } else {
      local('missions', null, e.target.id);
    }
    
    dispatch(joinMission(e.target.id));
  }
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>description</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map(({mission_id, mission_name, description, status}) => (
              <InsertMission
                key={mission_id}
                missionId={mission_id}
                missionName={mission_name}
                description={description}
                status={status}
                handleClick={handleClick}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default GetMission;