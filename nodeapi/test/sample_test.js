var chai = require('chai');
var expect = chai.expect;
describe('Sample Tests for Auto Testing Setup', function() {
  describe('Invalid Index Reference', function() {
    it('should return -1 when the value is not present', function() {
      expect(-1).to.equal([1,2,3].indexOf(4)); 
    });
  });
  describe('Valid Index Reference', function() {
    it('should return 1 when the value is at second place', function() {
      expect(1).to.equal([1,2,3].indexOf(2));
    });
  });
});