import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './Missions/mission';

const store = createStore(missionReducer, applyMiddleware(thunk));
export default store;