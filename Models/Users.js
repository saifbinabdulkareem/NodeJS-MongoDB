const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: String,
    age: Number,
    friendIds: Array
})

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;