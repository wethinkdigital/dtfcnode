var expect = require('chai').expect;
var should = require('chai').should;
var getposts = require('../components/getposts');

var config = require('../config');

describe('#getPosts()', function(){


	it('should return an array', function(){
		return getposts('https://www.dreamteamfc.com/c/wp-json/wp/v2/',3).then(function(posts){
			expect(posts).to.be.an('array');
		});
	});

	it('should return first item with id 61776', function(){
		return getposts('https://www.dreamteamfc.com/c/wp-json/wp/v2/',3).then(function(posts){
			var id = posts[0].id;
			expect(id).to.equal(61776);
		});
	});




});
