import axios from 'axios';

export default {

saveFriend: function (name, email, show, address) {
    console.log(name, email, show, address)
    return axios.post('/api/friends', {
        name: name, 
        email: email, 
        show: show, 
        address: address
    });
  },
  getFriends: function () {
    return axios.get('/api/friends');
  },
  setLocation: function (name, latitude, longitude) {
    return axios.put("/api/friends", 
    { name: name , 
     address: latitude + longitude })
  },
  geocode: function(address) {
    return axios.get(
      "http://api.positionstack.com/v1/forward?access_key=" + process.env.REACT_APP_GEOKEY +
      "&query=" + address 
      )
  }
}


