import local from "../../components/localStore";

const FETCH_MISSION_SUCCEED = 'src/redux/mission/FETCH_MISSION_SUCCEED';
const JOIN_MISSION = 'src/redux/mission/JOIN_MISSION';
const link = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  Missions: [],
};

export const fetchMissionSuceed = (missions) => ({
  type: FETCH_MISSION_SUCCEED,
  missions,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSION_SUCCEED:
      return {
        ...state,
        Missions: action.missions,
      }

    case JOIN_MISSION:
      const newtable = state.Missions.map((mission) => {
        if( action.id === mission.mission_id) {
          return {
            mission_id: mission.mission_id,
            mission_name: mission.mission_name,
            description: mission.description,
            status: !mission.status,
          };
        } else {
          return mission;
        }
      })
      return {
        ...state,
        Missions:[...newtable],
      }

    default:
      return state;
  }
};

export const fetchMission = () => (
  function (dispatch) {
    const Lstore = local('missions')
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        const formaData = [];
        data.map(({mission_id, mission_name, description}) => formaData.push({
          mission_id,
          mission_name,
          description,
          status: (Lstore.includes(mission_id)) ? true : false,
        }));
        dispatch(fetchMissionSuceed(formaData))});
  }
);

export default missionReducer;
