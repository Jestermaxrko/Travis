const factorial = require('./functions.js');

describe("Suite for factorial", () => {
    it('spec', () =>{
      expect(factorial(2)).toBe(2);
    })
});


  