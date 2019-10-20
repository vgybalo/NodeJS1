const AuthorsSchema = {
  '$schema': 'http://json-schema.org/draft-07/schema#',
  
  "type": "object",
  "properties": {
        "foolname": {
          "type": "string",
          "minLength": 1,
          "maxLength": 99
        },
        "book": {
          "type": "object"          
        },
         
    }
  
}

module.exports = AuthorsSchema;