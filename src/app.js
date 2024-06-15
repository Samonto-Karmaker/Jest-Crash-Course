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

const sum = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both arguments should be numbers");
    }
    return a + b;
};

const isEven = (num) => {
    if (typeof num !== "number") {
        throw new Error("Argument should be a number");
    }
    return num % 2 === 0;
};

// Let's fetch the data using a callback function
const fetchDataCallback = (callback) => {
    setTimeout(() => {
        try {
            callback(null, data);
        } catch (error) {
            callback(error, null);
        }
    }, 1000);
};

//Let's fetch the data using a promise
const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(data);
            } else {
                reject("Data not found");
            }
        }, 1000);
    });
};

//Let's fetch the data using async/await
const fetchDataAsync = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(data);
            } else {
                reject("Data not found");
            }
        }, 1000);
    });
}

//Let Greet people - getGreeting does not exist; We will mock it in the test
const greet = (getGreeting, name) => {
    return `${getGreeting()} ${name}`;
}

module.exports = {
    sum,
    data,
    isEven,
    fetchDataCallback,
    fetchDataPromise,
    fetchDataAsync,
    greet,
};
