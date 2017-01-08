const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', function() {


  it('should return "fizz-buzz" for multiples of 15', function() {
    [15, 30, 45, 60].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });

it('should return "fizz" for multiples of 3', function() {
    [3, 6, 9, 12].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz');
    });
  });

it('should return "buzz" for multiples of 5', function() {
    [5, 10, 15, 20].forEach(function(input) {
      fizzBuzzer(input).should.equal('buzz');
    });
  });

  it('should raise error if nums not multiples of 3, 5, 15', function() {
    const badInputs = [true, false, 'text', function() {}, [1, 2, 3]]
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});