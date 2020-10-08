const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 12;

const Schema = mongoose.Schema;const UserSchema = new Schema({
 name: {
    type: String,
    trim: true,
    required: true,
 },
 email: {
    type: String,
    trim: true,
    required: true
 },
 password: {
    type: String,
    trim: true,
    required: true
 },
 age: {
   type: String,
   trim: true,
   required: false
 },
 contact_number: {
   type: String,
   trim: true,
   required: false
 },
});

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

module.exports = mongoose.model('User', UserSchema);
