function createUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

function isRequired(value) {
    let str = "is required."
    if (!value) {
        return str;
    }
}

function isString(value) {
    let str = "must be a string."
    if (typeof value !== "string") {
        return str;
    }
}

function hasLengthBetween(a, b) {
    let str = "must be between 1 and 100 characters long."
    return function (value) {
        if (value.length < a || value.length > b) {
            return str;
        }
    }
}

function isNumber(value) {
    let str = "must be a number."
    if (typeof value !== "number") {
        return str;
    }
}

function isGreaterThan(number) {
    let str = "must be greater than 0."
    return function (value) {
        if (value < number) {
            return str;
        }
    }
}

function composeValidators(...arr) {
    return function (fieldName) {
        return function (value) {
            let result;
            for (let i = 0; i < arr.length; i++) {
                result = arr[i](value);
                if (result) {
                    let message = `${fieldName} ${result}`;
                    return message;
                }
            }
        }
    }
}

let validateName = composeValidators(
    isRequired,
    isString,
    hasLengthBetween(2, 100)
)("Name");


let validateAge = composeValidators(
    isNumber,
    isGreaterThan(0)
)("Age");


function withValidation(arrWithFunctions) {
    return function (func) {
        return function () {
            let arrWithParameters = [].concat(...arguments);
            if (arrWithFunctions.length != arrWithParameters.length) {
                throw new Error("The number of passed functions and arguments is different.");
            }
            outer: for (let i = 0; i < arrWithFunctions.length; i++) {
                for (let j = 0; j < arrWithParameters.length; j++) {
                    let result = arrWithFunctions[i](arrWithParameters[j]);
                    try {
                        if (i == j && result) throw new Error(`${result}`);
                    }
                    catch (err) {
                        console.error(err.message);
                        if (i == arrWithFunctions.length - 1) return;
                        continue outer;
                    }
                }
            }
            console.log("All parameters are valid. The function doesn't throw an error.");
            return func.call(this, ...arguments);
        }
    }
}

let createUserWithValidation = withValidation([
    validateName,
    validateAge
]);
createUser = createUserWithValidation(createUser);
let user = createUser("", "8");
console.log(user);