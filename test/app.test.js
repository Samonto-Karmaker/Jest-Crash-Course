const { sum } = require("../src/app");
const { data } = require("../src/app");

/* 
    toBe() is used to compare the primitive values or to check referential identity of object instances.
    toEqual() is used to compare the values of two objects.
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
