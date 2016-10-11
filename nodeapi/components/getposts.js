var fetch = require('node-fetch');

module.exports = function(wproot,n){
	
	return fetch(wproot+'posts?per_page='+n)
	.then(function(wp){
		return wp.json();
	}).then(function(json){
		return json;
	}).catch(function(error) {
  		console.log('There has been a problem with your fetch operation: ' + error.message);
	});

	//return [1,2,3];

}
