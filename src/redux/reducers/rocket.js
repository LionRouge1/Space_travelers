import {
  RESERVE_ROCKET,
  CANCEL_RESERVED_ROCKET,
  STARTED_FETCHING_ROCKETS,
  ROCKETS_FETCHED,
  ERROR_FETCHING_ROCKETS,
} from '../actionTypes/actionTypes';

const defaultState = {
  list: [],
  loading: false,
  error: false,
};

const RocketReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case STARTED_FETCHING_ROCKETS:
      return { ...state, loading: true };
    case ROCKETS_FETCHED:
      return { list: action.payload, loading: false, error: false };
    case ERROR_FETCHING_ROCKETS:
      return { ...state, error: true };
    case RESERVE_ROCKET:
      return {
        ...state,
        list: state.list.map((rocket) => {
          if (rocket.id !== action.payload.id) {
            return rocket;
          }
          return { ...rocket, reserved: !rocket.reserved };
        }),
      };
    case CANCEL_RESERVED_ROCKET:
      return {
        ...state,
        list: state.list.map((rocket) => {
          if (rocket.id !== action.payload.id) {
            return rocket;
          }
          return { ...rocket, reserved: !rocket.reserved };
        }),
      };
    default:
      return state;
  }
};

export default RocketReducer;
