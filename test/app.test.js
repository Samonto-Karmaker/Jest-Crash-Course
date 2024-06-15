const {
    sum,
    data,
    isEven,
    fetchDataCallback,
    fetchDataPromise,
    fetchDataAsync,
    greet,
} = require("../src/app");

/* 
    toBe() is used to compare the primitive values or to check referential identity of object instances.
    toEqual() is used to compare the values of two objects.
    toHaveProperty() is used to check if the object has a property or not.
    not is used to negate the matcher
    toBeTruthy() is used to check if the value is truthy or not.

    toBeFalsy() is used to check if the value is falsy or not.
    falsy values are: false, 0, "", null, undefined, and NaN.

    toThrow() is used to check if the function throws an error or not.
    optionally, you can also check the error message by passing the error message as an argument to toThrow().
    in that case, the test will pass only if the error message matches the provided message.

    toMatchObject() is used to check if the object has the properties and values defined in the expected object.
    expect.any() is used to check if the value is of the expected type.
    expect.objectContaining() is used to check if the object has the properties defined in the expected object.
*/

test("Test 1: 1 + 2 should be 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("Test 2: Object data should match", () => {
    expect(data).toMatchObject({
        userName: expect.any(String),
        age: expect.any(Number),
        email: expect.any(String),
        address: expect.objectContaining({
            city: expect.any(String),
            state: expect.any(String),
            country: expect.any(String),
        }),
    });
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

test("Test 6: throws error when argument is not a number", () => {
    expect(() => isEven("10")).toThrow();
});

test("Test 7: throws error when arguments are not numbers", () => {
    expect(() => sum("1", 2)).toThrow("Both arguments should be numbers");
});

/* 
    Let's learn testing async code in the next section.
    1. callback functions
    2. promises
    3. async/await

    done() is used to tell Jest that the test is complete.
*/

test("Test 8: callback function", (done) => {
    try {
        fetchDataCallback((response) => {
            expect(response).toEqual(null, data);
            done();
        });
    } catch (error) {
        expect(error).toBeDefined();
        done();
    }
});

test("Test 9: promise", async () => {
    try {
        await expect(fetchDataPromise()).resolves.toEqual(data);
    } catch (error) {
        await expect(fetchDataPromise()).rejects.toEqual("Data not found");
    }
});

test("Test 10: async/await", async () => {
    try {
        const response = await fetchDataAsync();
        expect(response).toEqual(data);
    } catch (error) {
        await expect(fetchDataAsync()).rejects.toEqual("Data not found");
    }
});

/*
    Let's learn mocking in the next section.
    Mocking is used to replace a function with a fake implementation.
    It is useful when you want to test a function that depends on another function.
*/

test("Test 11: greet function", () => {
    // Mocking getGreeting function to return "Hello"
    const getGreeting = jest.fn(() => "Hello");

    // Call greet function with getGreeting function and name
    const result = greet(getGreeting, "John");

    // Assert the result
    expect(result).toBe("Hello John");
    expect(getGreeting).toHaveBeenCalled();
    expect(getGreeting).toHaveBeenCalledTimes(1);
});