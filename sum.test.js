const sum = require("./sum");
// tets has to be specified for each block //

// it() has 2 params, 1 is string; for describing the name of the test, another param is a callback function () => {}

// *** best practice is, write 1 expect for each tests *** //

// describe => group common tests together

// Matcher methods
// toBe => checks data type ===
// toEqual => !==

// boolean check

// toBeTruthy
// toBeFalsy
// toBeNull
// toBeUndefined

// *** numbers check
// toBeGreaterThan
// toBeGreaterThanOrEqual
// toBeLessThan
// toBeLessThanOrEqual
// toBeCloseTo

// *** strings check / regex
// toMatch

// *** array
// toContain

// *** exception
// toThrow

// ***************************** TEST start

// describe("first tests", () => {

//     it("should add 1 + 2 = 3", () => {
//         const result = sum(1,4);
//         // expect the result with expect.(variable).toBe()
//         expect(result).toBe(5);
//     })

//     it("Should check if empty objects are equal", () => {
//         // Object.is equality check
//         const emptyObj = {}
//         // expect(emptyObj).toBe({}) // false
//         expect(emptyObj).toEqual({}) // true
//     })
// })

// truthy/falsy values
describe("Check for true or false", () => {
  it("Check for null", () => {
    const n = null;
    expect(n).toBeNull();
  });
  it("Check for undefined", () => {
    const n = undefined;
    expect(n).toBeUndefined();
  });
});

// for numbers
// describe("Check for numbers", () => {
//     it ("two plus two", () => {
//         const value = 2 + 2;
//         expect(value).toBe(4);
//         expect(value).toBeGreaterThan(3);
//         expect(value).toBeGreaterThanOrEqual(4);
//         expect(value).toBeLessThan(10);
//         expect(value).toBeLessThanOrEqual(5);
//     })

//     // float num
//     it ("Floating numbers", () => {
//         const value = 0.1 + 0.2;
//         expect(value).toBeCloseTo(0.29888888888888);
//     })
// })

// strings
//  describe("For strings", ()=> {
//     it("Test if there's no I in team", () => {
//         expect("Team").not.toMatch(/I/)
//     })
//  })

// arrays

describe("check for Arrays", () => {
  it("shopping-list contains a certain value", () => {
    const shoppings = ["milk", "potato", "kitchen sink", "wrench", "iMac"];
    // check for a certain value //
    expect(shoppings).toContain("milk"); // value is case-sensitive
  });
});

// exception => error handler / error throw functions

// let's take a demo function which throws an error each time it renders //
function compileAndroidCode() {
  throw new Error("You're using the wrong JDK!");
}

// logic failure
describe("exception", () => {
  it("compiling android goes as expected", () => {
    expect(() => compileAndroidCode()).toThrow(Error);
  });
});
