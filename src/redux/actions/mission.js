const FETCH_MISSION_SUCCEED = 'src/redux/mission/FETCH_MISSION_SUCCEED';
const link = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  Missions: [],
};

export const fetchMissionSuceed = (missions) => ({
  type: FETCH_MISSION_SUCCEED,
  missions,
});

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSION_SUCCEED:
      return {
        ...state,
        Missions: action.missions,
      }

    default:
      return state;
  }
};

export const fetchMission = () => (
  function (dispatch) {
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        const formaData = [];
        data.map(({mission_id, mission_name, description}) => formaData.push({
          mission_id,
          mission_name,
          description,
          status: false,
        }));
        dispatch(fetchMissionSuceed(formaData))});
  }
);

export default missionReducer;
