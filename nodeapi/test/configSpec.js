var expect = require('chai').expect;
var config = require('../config');

describe('config', function(){

	describe('#getConfig()', function(){
		it('should return an object of config items', function(){
			var results = config.getConfig();
			expect(results).to.be.an('object');
			expect(results).to.not.be.empty;
		})
	});

	describe('#setConfig()', function(){
		it('should add an element to the config items', function(){

			config.setConfig('mytestkey','mytestvalue');
			var newconfig = config.getConfig();
			expect(newconfig.mytestkey).to.equal('mytestvalue');

		})
	});

	describe('#getWpRoot()', function(){
		it('should return an API root url', function(){

			var wproot;

			wproot = config.getWpRoot('local');
			expect(wproot).to.equal('http://dtfc/c/wp-json/wp/v2/');

			var wproot = config.getWpRoot('prod');
			expect(wproot).to.equal('https://www.dreamteamfc.com/c/wp-json/wp/v2/');

			var wproot = config.getWpRoot('uat');
			expect(wproot).to.equal('https://www.uat-dreamteamfc.com/c/wp-json/wp/v2/');

		})
	});

});