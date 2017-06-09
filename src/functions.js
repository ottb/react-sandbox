import axios from 'axios'

// creates request URL based on state, makes API call with error handling
export function callAPI(urlProp, maxPosts, postOrder) {
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

// creates request URL based on state, makes API call with error handling
export function callTeamCityAPI(urlProp, maxBuilds, state) {
  return new Promise(function (resolve, reject) {
    let obj = {
      message: "",
      builds: []
    };

    let url = urlProp + "?locator=";
    if (maxBuilds) {
      url += "count:" + maxBuilds + ",";
    }

    if (state) {
      url += "state:" + state + ",";
    }
console.log(url);
    axios.get(url)
      .then((response) => {
        if (!response.data.build || response.data.build.length === 0) {
          obj.message = "no builds at this time";
        } else {
          obj.builds = response.data.build;
        }
        resolve(obj);
      })
      .catch((error) => {
        obj.message = "error loading builds";
        resolve(obj);
      });
  });
}

