import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import auth from './auth'
import {reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({
    routing,
    auth,
    form: formReducer
});

export default rootReducer;
