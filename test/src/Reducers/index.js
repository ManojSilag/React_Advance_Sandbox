import { combineReducers} from 'redux';
import commentReducers from './commentReducers';

export default combineReducers({
    commentList: commentReducers
})