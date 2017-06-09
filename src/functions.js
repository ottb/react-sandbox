import axios from 'axios'

// creates request URL based on state, makes API call with error handling
export default function callAPI(urlProp, maxPosts, postOrder) {
  return new Promise(function (resolve, reject) {
    let obj = {
      message: "",
      posts: []
    };

    let url = urlProp + "?_embed";
    if (maxPosts) {
      url += "&per_page=" + maxPosts;
    }
    if (postOrder) {
      url += "&filter[orderby]=date&order=" + postOrder;
    }
    axios.get(url)
      .then((response) => {
        if (!response.data || response.data.length === 0) {
          obj.message = "no posts at this time";
        } else {
          obj.posts = response.data;
        }
        resolve(obj);
      })
      .catch((error) => {
        obj.message = "error loading posts";
        resolve(obj);
      });
  });
}

