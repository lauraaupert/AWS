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
}
