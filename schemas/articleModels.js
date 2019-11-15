const userSchema = {
  '$schema': 'http://json-schema.org/draft-07/schema#',
  
  "type": "object",
  "properties": {
        "title": {
          "type": "string",
          "minLength": 1,
          "maxLength": 99
        },
        "text": {
          "type": "string",
          "minLength": 1,
          "maxLength": 99
        },
         "userId": {
          "type": "string",
          "minLength": 1,
          "maxLength": 99
        },
        "comentId": {
          "type": "string",
          "minLength": 1,
          "maxLength": 99
        },

    }
  }

module.exports = userSchema;