import {
  RESERVE_ROCKET,
  CANCEL_RESERVED_ROCKET,
  ROCKETS_FETCHED,
  STARTED_FETCHING_ROCKETS,
  ERROR_FETCHING_ROCKETS,
} from '../actionTypes/actionTypes';
import getRockets from '../api/rocket';

export const rocketsFetchingStarted = () => ({
  type: STARTED_FETCHING_ROCKETS,
});

export const errorFetchingRockets = () => ({
  type: ERROR_FETCHING_ROCKETS,
});

export const rocketsFetched = (rockets) => ({
  type: ROCKETS_FETCHED,
  payload: rockets,
});

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: { id },
});

export const cancelReserve = (id) => ({
  type: CANCEL_RESERVED_ROCKET,
  payload: { id },
});

export const retrieveRockets = () => async (dispatch) => {
  const url = 'https://api.spacexdata.com/v3/rockets';
  const data = await getRockets(url);
  dispatch(rocketsFetchingStarted());
  const rocketData = data.data;

  const rockets = rocketData.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    image: rocket.flickr_images[1],
    reserved: false,
  }));
  dispatch(rocketsFetched(rockets));
  return Promise.resolve(rockets);
};
