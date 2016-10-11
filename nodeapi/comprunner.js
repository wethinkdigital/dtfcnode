var getposts = require('./components/getposts');
// getposts(function(result){
// 	console.log('getting posts');
// 	console.log(result);
// });

var p = Promise.resolve(getposts());
p.then(function(res){
	console.log(res);
})