import { combineReducers} from 'redux';
import commentReducers from './commentReducers';
import authReducer from './auth';

export default combineReducers({
    commentList: commentReducers,
    auth: authReducer
})