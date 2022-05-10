/* eslint-disable no-underscore-dangle */
import {
    combineReducers,
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import thunk from 'redux-thunk';
import RocketReducer from '../reducers/rocket';

const rootReducer = combineReducers({
    rockets: RocketReducer,
});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
    ),
);

export default store;