// function Shape(x, y) {
//     this.x = x;
//     this.y = y;
// }

// Shape.prototype.getPosition = function () {
//     return {
//         x: this.x,
//         y: this.y
//     };
// }

// Shape.prototype.getArea = function () {
//     throw new Error("The method should be implemented.");
// }

// function Rectangle(x, y, width, height) {
//     Shape.call(this, x, y);

//     this.width = width;
//     this.height = height;
// }

// Rectangle.prototype = Object.create(
//     Shape.prototype,
//     {
//         constructor: {
//             value: Rectangle,
//             enumerable: false,
//             writable: true,
//             configurable: true,
//         },
//     },
// );

// Rectangle.prototype.getArea = function () {
//     return this.width * this.height;
// }

// function Square(x, y, size) {
//     Shape.call(this, x, y);

//     this.size = size;
// }

// Square.prototype = Object.create(
//     Shape.prototype,
//     {
//         constructor: {
//             value: Square,
//             enumerable: false,
//             writable: true,
//             configurable: true,
//         },
//     },
// );

// Square.prototype.getArea = function () {
//     return Math.pow(this.size, 2);
// }

// function testRectangle(rect) {
//     if (rect.getArea() === 10) {
//         console.log("The test passed.");
//     } else {
//         console.error("The test failed.");
//     }
// }

// function testSquare(square) {
//     if (square.getArea() === 25) {
//         console.log("The test passed.");
//     } else {
//         console.error("The test failed.");
//     }
// }

// testRectangle(new Rectangle(0, 0, 5, 2));
// testSquare(new Square(0, 0, 2));

// function Triangle(x, y, side, height) {
//     Shape.call(this, x, y);

//     this.side = side;
//     this.height = height;
// }

// Triangle.prototype = Object.create(
//     Shape.prototype,
//     {
//         constructor: {
//             value: Triangle,
//             enumerable: false,
//             writable: true,
//             configurable: true,

//         },
//     },
// );

// Triangle.prototype.getArea = function () {
//     return this.side * this.height / 2;
// }

// function testTriangle(triangle) {
//     if (triangle.getArea() === 5) {
//         console.log("The test passed.");
//     } else {
//         console.error("The test failed.");
//     }
// }

// testTriangle(new Triangle(0, 0, 2, 5));



// function createUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }

// function isRequired() {
//     console.error("Name is required.");
// }

// function isString() {
//     console.error("Name must be a string.");
// }

// function hasLengthBetween(a, b) {
//     console.error(`Name must be between ${a} and ${b} characters long.`);
// }


// function isNumber() {
//     console.error("Age must be a number.");
// }

// function isGreaterThan(number) {
//     console.error(`Age must be greater than ${number}`);
// }


// let count = 0;
// let arr = [];

// hasLengthBetween = composeValidators(hasLengthBetween);


// function composeValidators(f1, f2) {
//     arr.push(arguments[0]);
//     if (count == 0) {
//         return func1;
//     }
//     function func1() {
//         arr.push(...arguments);
//         count++;
//     }
//     if (count == 1) {
//         count++;
//         return function (elem) {
//             count++;
//             if (!elem) {
//                 f1.call(this, elem); return false;
//             }
//             if (typeof elem !== 'string') {
//                 f2.call(this, elem); return false;
//             }
//             if (elem.length <= arr[1] || elem.length >= arr[2]) {
//                 arr[0](arr[1], arr[2]); return false;
//             }
//             return true;
//         }
//     }
//     if (count == 2) {
//         arr[3] = arguments[0];
//         return func2;
//     }
//     function func2() {
//         arr[4] = arguments[0];
//         count++;
//     }
//     if (count == 3) return function (elem) {
//         count = 0;
//         if (typeof elem !== 'number') {
//             f1.call(this, elem); return false;
//         }
//         if (elem < arr[4]) {
//             arr[3](arr[4]); return false;
//         }
//         return true;
//     }
// }

// let validateName = composeValidators(
//     isRequired,
//     isString,
//     hasLengthBetween(2, 100)
// );

// isGreaterThan = composeValidators(isGreaterThan);

// let validateAge = composeValidators(
//     isNumber,
//     isGreaterThan(0)
// );


// function withValidation([f1, f2]) {
//     result = [];
//     return function () {
//         result[0] = f1.call(this, arguments[0]);
//         result[1] = f2.call(this, arguments[1]);
//         if (result[0] == false || result[1] == false) return;
//         console.log("All parameters are valid. The function doesn't throw an error.");
//     }
// }

// const createUserWithValidation = withValidation([
//     validateName,
//     validateAge
// ])("Jon", 12);



function isRequired(value) {
    let str = "Error: Name is required."
    try {
        if (!value) {
            throw new Error(str);
        }
    } catch(err) {
        console.log(err.message);
        return str;
    }
}

function isString(value) {
    let str = "Error: Name must be a string."
    try {
        if (typeof value !== "string") {
            throw new Error(str);
        }
    } catch (err) {
        console.log(err.message);
        return str;
    }
}

function hasLengthBetween(a, b) {
    let str = "Error: Name must be between 1 and 100 characters long."
    return function (value) {
        try {
            if (value.length < a || value.length > b) {
                throw new Error(str);
            }
        } catch (err) {
            console.log(err.message);
            return str;
        }
    }
}


function isNumber(value) {
    let str = "Error: Age must be a number."
    try {
        if (typeof value !== "number") {
            throw new Error(str);
        }
    } catch (err) {
        console.log(err.message);
        return str;
    }
}

function isGreaterThan(number) {
    let str = "Error: Age must be greater than 0."
    return function (value) {
        try {
            if (value < number) {
                throw new Error(str);
            }
        } catch (err) {
            console.log(err.message);
            return str;
        }
    }
}


function composeValidators() {
    let arr = [].concat(...arguments);
    return function (value) {
        let result;
        for (let i = 0; i < arr.length; i++) {
            if (result = arr[i](value)) return result;
        }
    }
}

let validateName = composeValidators(
    isRequired,
    isString,
    hasLengthBetween(2, 100)
);


let validateAge = composeValidators(
    isNumber,
    isGreaterThan(0)
);


function withValidation(arrWithFunctions) {
    let result = true;
    return function () {
        let arrWithParameters = [].concat(...arguments);
        if (arrWithFunctions.length != arrWithParameters.length) {
            console.log("Error"); return;
        }
        for (let i = 0; i < arrWithFunctions.length; i++) {
            for (let j = 0; j < arrWithParameters.length; j++) {
                if (i == j && arrWithFunctions[i](arrWithParameters[j])) {
                    result = false;
                }
            }
        }
        if (result == true) {
            console.log("All parameters are valid. The function doesn't throw an error.");
        }
    }
}

const createUserWithValidation = withValidation([
    validateName,
    validateAge,
    validateName,
    validateAge
])("Tom", 12, "Peter", 13);


