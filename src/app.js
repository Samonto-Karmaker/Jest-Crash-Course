const sum = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both arguments should be numbers");
    }
    return a + b;
};

const data = {
    userName: "John Doe",
    age: 25,
    email: "jd@gmail.com",
    address: {
        city: "New York",
        state: "NY",
        country: "USA",
    },
};

const isEven = (num) => {
    if (typeof num !== "number") {
        throw new Error("Argument should be a number");
    }
    return num % 2 === 0;
};

module.exports = {
    sum,
    data,
    isEven,
};
