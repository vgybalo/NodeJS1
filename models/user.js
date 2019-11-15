const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true
  },
  pwd: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }  
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
  const hash = await new Promise((resolve, reject) => {
    bcrypt.hash(pwd, 10, function(err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })

  return hash;
}
catch(err) {
    console.log(err);
}
};

//UserSchema.plugin(autoIncrement.plugin, 'User');
autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, {
  model: 'UserSchema',
  field: 'user_id',
  startAt: 1,
  incrementBy: 1
});




const Model = mongoose.model('User', UserSchema);
module.exports = Model;