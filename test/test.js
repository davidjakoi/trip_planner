const expect = require('chai').expect;
const tripPlanner = require("../index.js");

describe('tripPlanning', function() {
	it('should say Wrong input!', function() {
		expect(tripPlanner({})).to.equal("Wrong input!");
	});

	it("shouldn't add a destination if it is not a string", function() {
		expect(tripPlanner(["x", "y", 4])).to.eql(["x", "y"]);
	});

	it("should return ['x']", function() {
		expect(tripPlanner(['x'])).to.eql(['x']);
	});

	it("should return ['x', 'y', 'z']", function() {
		expect(tripPlanner(['x', 'y', 'z'])).to.eql(['x', 'y', 'z']);
	});

	it("should return an array where 'z' is before 'y'", function() {
		expect(tripPlanner(['x', 'y => z', 'z'])).to.eql(['x', 'z', 'y']);
	});

	it("should return ['u', 'z', 'w', 'v', 'x', 'y']", function() {
		expect(tripPlanner(["u", "v => w", "w => z", "x => u", "y => v", "y => w",  "z"])).to.eql(['u', 'z', 'w', 'v', 'x', 'y']);
	});
});