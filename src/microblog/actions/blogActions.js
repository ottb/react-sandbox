import * as types from '../../actions/actionTypes'

export function createBlog(blog) {
  return { type: types.CREATE_BLOG, blog }
}