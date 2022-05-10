import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMission } from "../redux/Missions/mission";
import InsertMission from "./InsertMission";

const GetMission = () => {
  const missions  = useSelector((state) => state.Missions);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch])
  
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
              />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default GetMission;