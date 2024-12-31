var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("Faktöriyel doğru hesaplanmalı", () => {
      // Setup
      const inputNumber = 5;
      const expectedResult = 120;

      // Exercise
      const result = Calculate.factorial(inputNumber);

      // Verify
      assert.equal(result, expectedResult);
    });
    it("Girdi 3 olduğunda sonuç 6 çıkmalı", () => {
      // Setup
      const inputNumber = 3;
      const expectedResult = 6;

      // Exercise
      const result = Calculate.factorial(inputNumber);

      // Verify
      assert.equal(result, expectedResult);
    });
    it("Girdi 0 olduğunda sonuç 1 çıkmalı", () => {
      // Setup
      const inputNumber = 0;
      const expectedResult = 1;

      // Exercise
      const result = Calculate.factorial(inputNumber);

      // Verify
      assert.equal(result, expectedResult);
    });
  });
});
