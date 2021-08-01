import axios from 'axios';

export default {

saveFriend: function (name, email, show, latitude, longitude) {
    console.log(name, email, show, latitude)
    return axios.post('/api/friends', {
        name: name, 
        email: email, 
        show: show, 
        location: {
            lat: latitude,
            lng: longitude
        }
    });
  },
  getFriends: function () {
    return axios.get('/api/friends');
  },
  setLocation: function (name, latitude, longitude) {
    return axios.put("/api/friends", 
    { name: name , 
     latitude: latitude,
     longitude: longitude })
  },
  geocode: function(address) {
    return axios.get(
      "http://api.positionstack.com/v1/forward?access_key=" + process.env.REACT_APP_GEOKEY +
      "&query=" + address 
      )
  },
  getFriend: function (search) {
    return axios.get('/api/friends', search);
  },
  postAWS: function (formState) {            
  const postData = async () => {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    })
    const data = await res.json();
    console.log(data);
  }
  postData();
},
updateAWS: function (image) {            
  const updateData = async () => {
    const res = await fetch('/api/users', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(image)
    })
    const data = await res.json();
    console.log(data);
  }
  updateData();
},

}


