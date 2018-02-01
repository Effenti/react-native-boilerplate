import { combineReducers } from 'redux';
/*import HistoryReducer from './history';
import GuidesReducer from './guides';
import FrequencyReducer from './frequency';
import GeographicalAreaReducer from './geographicalArea';
import AuthReducer from './auth';*/
import NavReducer from './nav';
/*import HospitalReducer from './hospital';
import SensibilityReducer from './sensibility';*/

// ALL OUR REDUCERS
const AppReducer = combineReducers({
  nav: NavReducer,
});

export default AppReducer;
