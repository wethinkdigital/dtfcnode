var expect = require('chai').expect;
var should = require('chai').should;
var getposts = require('../components/getposts');

var config = require('../config');

describe('#getPosts()', function(){

	var posts;

	before (function (done) {
		wproot = 'https://www.dreamteamfc.com/c/wp-json/wp/v2/';
		getposts(wproot,3, function(res){
			posts = res;
			done();
		});
	});

	it('should return an array', function(done){

			expect(posts).to.be.an('object');
			done();


	});

	// it('should have 3 elements', function(){

	// 	getposts(wproot,3,function(posts){
	// 		expect(posts).to.have.lengthOf(3); 
	// 	});
	// });

	// it('should have a first item with an id of 112674', function(){

	// 	getposts(wproot,1,function(posts){
	// 		expect(posts[0].id).to.equal(115); 
	// 	});
		
	// })


});

describe('User', function(){
	describe('#save()', function(){
		it('should save without error', function(done){
			var user = new User('Luna');

			user.save(function(err){
			if (err) throw err;
			done();
			});
		})
	})
})
