import Vue from 'vue';

export default {
  getUser(username) {
    return Vue.axios.get(`https://conduit.productionready.io/api/profiles/${username}`)
    .catch((error) => {
      throw new Error(error);
    });
  },
  getUserArticles(username) {
    return Vue.axios.get(`https://conduit.productionready.io/api/profiles/${username}?author=${username}`)
    .catch((error) => {
      throw new Error(error);
    });
  },
  getUserFavorites(username) {
    return Vue.axios.get(`https://conduit.productionready.io/api/profiles/${username}?favorited=${username}`)
    .catch((error) => {
      throw new Error(error);
    });
  },
};
