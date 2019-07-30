const http = require('http');

const url = 'http://swapi.co/api/planets/3/';

http.get(url, function(res){
   if (err) {
        throw err;
    }
else {
    let planet = JSON.parse(res);
}
} )
//const text = JSON.parse(planet);
console.log(planet);