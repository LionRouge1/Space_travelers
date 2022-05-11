import React from "react";
import { useSelector } from "react-redux";
import local from "../localStore";

const JoinMission = () => {
  const Local = local('missions');
  const joined = useSelector((state) => state.missions.Missions)
    .filter((item) => Local.includes(item.mission_id));
    
  return (
    <div className="joined">
      <ul>
        {
          joined.map(({mission_id: missionId, mission_name: missionName }) => (
            <li key={missionId}>
              {missionName}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default JoinMission;