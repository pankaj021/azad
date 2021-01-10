import { combineReducers } from 'redux';
import userReducer from './userReducer';
import contactReducer from './contactReducer';
import loaderReducer from './loaderReducer';
import errorReducer from './errorReducer';
import teachersReducer from './teachersReducer';
import targetsReducer from './targetsReducer';
import donationsReducer from './donationsReducer';
import contributorsReducer from './contributorsReducer';

export default combineReducers({
    user: userReducer,
    contacts: contactReducer,
    teachers: teachersReducer,
    targets: targetsReducer,
    donations: donationsReducer,
    contributors: contributorsReducer,
    loader: loaderReducer,
    error: errorReducer
})