const mongoose = require('mongoose');

var URL = `http://eco-back-9qg1.onrender.com/defaultUser.png`;
const userSchema = new mongoose.Schema({
  userName: 'string',
  email:'string',
  password: 'string',
  address:'string',
  phone:'string',
  gender:'string',
  imgURL: {
    type: 'string',
    default : URL,
  },
  wishlist:{
    type: [],
    default:[],
  },
  cart:{
    type: [],
    default:[],
  },  
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
