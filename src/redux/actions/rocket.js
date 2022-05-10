import {
    DISPLAY_ALL_ROCKETS,
    RESERVE_ROCKET,
    CANCEL_RESERVED_ROCKET,
} from '../actionTypes/actionTypes';
import getRockets from '../api/rocket';

export const displayRockets = () => async(dispatch) => {
    const url = 'https://api.spacexdata.com/v3/rockets';
    const data = await getRockets(url);
    const rocketData = data.data;

    const rockets = rocketData.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        description: rocket.description,
        image: rocket.flickr_images[0],
        reserved: false,
    }));

    dispatch({
        type: DISPLAY_ALL_ROCKETS,
        payload: rockets,
    });
};

export const reserveRocket = (id) => ({
    type: RESERVE_ROCKET,
    payload: { id },
});

export const cancelReserve = (id) => ({
    type: CANCEL_RESERVED_ROCKET,
    payload: { id },
});