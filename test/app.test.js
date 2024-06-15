const { sum, data, isEven } = require("../src/app");

/* 
    toBe() is used to compare the primitive values or to check referential identity of object instances.
    toEqual() is used to compare the values of two objects.
    toHaveProperty() is used to check if the object has a property or not.
    not is used to negate the matcher
    toBeTruthy() is used to check if the value is truthy or not.

    toBeFalsy() is used to check if the value is falsy or not.
    falsy values are: false, 0, "", null, undefined, and NaN.
    
*/

test("Test 1: 1 + 2 should be 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("Test 2: Object data should match", () => {
    expect(data).toEqual({
        userName: "John Doe",
        age: 25,
        email: "jd@gmail.com",
        address: {
            city: "New York",
            state: "NY",
            country: "USA",
        },
    });
});

test("Test 3: data should not include password", () => {
    expect(data).not.toHaveProperty("password");
});

test("Test 4: 5 is not an even number", () => {
    expect(isEven(5)).toBeFalsy();
});

test("Test 5: 10 is an even number", () => {
    expect(isEven(10)).toBeTruthy();
});
