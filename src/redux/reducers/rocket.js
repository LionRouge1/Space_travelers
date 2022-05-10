import {
    DISPLAY_ALL_ROCKETS,
    RESERVE_ROCKET,
    CANCEL_RESERVED_ROCKET,
} from '../actionTypes/actionTypes';

const RocketReducer = (state = [], action = {}) => {
    switch (action.type) {
        case DISPLAY_ALL_ROCKETS:
            return [...action.payload];
        case RESERVE_ROCKET:
            return state.map((rocket) => {
                if (rocket.id !== action.payload.id) {
                    return rocket;
                }
                return {...rocket, reserved: true };
            });
        case CANCEL_RESERVED_ROCKET:
            return state.map((rocket) => {
                if (rocket.id !== action.payload.id) {
                    return rocket;
                }
                return {...rocket, reserved: false };
            });
        default:
            return state;
    }
};

export default RocketReducer;