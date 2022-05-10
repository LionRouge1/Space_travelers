import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import RocketReducer from './reducers/rocket';
import missionReducer from './actions/mission';

const rootReducer = combineReducers({
  missions: missionReducer,
  rockets: RocketReducer,
});


const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(thunk),
  ),
);

export default store;