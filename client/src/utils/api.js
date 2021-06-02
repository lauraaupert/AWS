import axios from "axios";

export default {

saveFriend: function (friendData) {
    return axios.put("/api/friends", friendData);
  },
  getFriends: function () {
    return axios.get("/api/friends");
  },
}
