const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    pwd: String,
    phone: String,
    birthday: Date,
    cpf: String,
    sex: String,
    broker: Boolean
});

module.exports = mongoose.model('User', UserSchema);