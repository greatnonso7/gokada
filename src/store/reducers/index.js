import {combineReducers} from 'redux';
import {searchRobots, requestRobots} from './cats';

const appReducer = combineReducers({searchRobots, requestRobots});

export default appReducer;
