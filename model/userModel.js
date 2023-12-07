const mongoose = require('mongoose');

const userSchmea = new mongoose.Schema({
    email : {type : String , require : true ,  unique: true},
    password : {type : String , require : true },
    data : {
        name : {type : String   , require : true} 
    },
})

module.exports = mongoose.model('users' ,  userSchmea);