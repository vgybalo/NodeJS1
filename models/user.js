const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    /*required: true*/
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

UserSchema.methods.comparePwd = async (pwd) => {
  try {
    const auth = await bcrypt.compare(this.pwd, pwd)
    return auth;
  }
  catch(err) {
     console.log(err);
  }
    };

UserSchema.methods.hashPwd = async (pwd)=> {
try {  
  const hash = await bcrypt.hash(pwd, '123456');
  return hash;
}
catch(err) {
    console.log(err);
}
};

const Model = mongoose.model('User', UserSchema);
module.exports = Model;