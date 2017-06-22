import { combineReducers } from 'redux';
import blogs from '../microblog/reducers/blogReducer';

const rootReducer = combineReducers({
  blogs
});

export default rootReducer;