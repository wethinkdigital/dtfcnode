var fetch = require('node-fetch');

module.exports = function(){
	
	fetch('http://dtfc/c/wp-json/wp/v2/posts?per_page=2')
	.then(function(wp){
		return wp.json();
	}).then(function(json){
		return json;
	}).catch(function(error) {
  		console.log('There has been a problem with your fetch operation: ' + error.message);
	});

	//return [1,2,3];

}
