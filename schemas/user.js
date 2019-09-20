const carSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  
  "type": "object",
  "properties": {
        "model": {
          "type": "string",
          "minLength": 1,
          "maxLength": 99
        },
        "name": {
          "type": "string",
          "minLength": 1,
          "maxLength": 99
        },
        "mileage": {
          "type": "number",
          "minimum": 0,
          "maximum": 1000000
          },
        "qualities": {
            "type": "string",
              "enum": ["ABS", "ERP", "volume"]
          },
        "price": {
            "type": "number",
            "minimum": 0,
            "maximum": 10000000
            }
  

    }
  
}

module.exports = carSchema;