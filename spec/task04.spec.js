var assert = require("assert");
var assesment = require("../src/task04");
var chai = require('chai');
var expect = chai.expect;
describe("currency #start_test", function() {
  describe("USDl", function(a, b) {
    it("should return  1.33", function() {
      let result = assesment(100)-1.33
      expect(result).to.below(0.01);
    });
    it("should return 20.89", function() {
       let result = assesment(1567)-20.89
      expect(result).to.below(0.01);
    });
    it("should return 16.45", function() {
       let result = assesment(1234)-16.45
      expect(result).to.below(0.01);
      // assert.equal(assesment(1234), 16.45);
    });
    it("should return 339.41 #end_test", function() {
       let result = assesment(25456)-339.41
      expect(result).to.below(0.01);
      //assert.equal(assesment(25456), 339.41);
    });
  });
});
