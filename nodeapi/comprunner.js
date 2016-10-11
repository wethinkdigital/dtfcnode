var getposts = require('./components/getposts');
getposts(function(result){
	console.log('getting posts');
	console.log(result);
});
