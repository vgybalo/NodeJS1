const userSchema = {
  '$schema': 'http://json-schema.org/draft-07/schema#',
  
  "type": "object",
  "properties": {
        "userEmail": {
          "type": "string",
          "minLength": 1,
          "maxLength": 99
        },
        "userName": {
          "type": "string",
          "minLength": 1,
          "maxLength": 99
        },
         "userSurname": {
          "type": "string",
          "minLength": 1,
          "maxLength": 99
        }, 
        "userLogin": {
          "type": "string",
          "minLength": 1,
          "maxLength": 99
        },
        /*"userBirthday": {
          "type": "string",
          "minLength": 1,
          "maxLength": 99
        }, */
        "phone": {
          "type": "string",
          "minLength": 1,
          "maxLength": 99
        },
          
        "pwd": {
          "type": "string",
          "minLength": 1,
          "maxLength": 99
        },

    }
  
}

module.exports = userSchema;