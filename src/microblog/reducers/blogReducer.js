import * as types from '../../actions/actionTypes'

export default function blogReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_BLOG:
      return [...state, action.blog];
    default:
      return state;
  }
}