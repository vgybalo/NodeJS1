const BooksSchema = {
  '$schema': 'http://json-schema.org/draft-07/schema#',
  
  "type": "object",
  "properties": {
        "title": {
          "type": "string",
          "minLength": 1,
          "maxLength": 99
        },
        "author": {
          "type": "object"          
        },
         
    }
  
}

module.exports = BooksSchema;