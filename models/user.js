const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userSurname: {
    type: String,
    required: true
  },
  userLogin: {
    type: String,
    required: true
  },
  userBirthday: {
    type: Date,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  pwd: {
    type: String,
    required: true
  },
  });

UserSchema.methods.comparePwd = function(cb) {
     let el = this.model('UserModel').findOne({userEmail: this.userEmail},
      
     function (el) { if(el.pwd===bcrypt.compare(this.pwd, hash, function(err, res) {
                                 })
    ) return true})
    
};


const Model = mongoose.model('User', UserSchema);
module.exports = Model;