function createUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

function isRequired(value) {
  let str = 'is required.';
  if (value === undefined) {
    return str;
  }
}

function isString(value) {
  if (value !== undefined) {
    let str = 'must be a string.';
    if (typeof value !== 'string') {
      return str;
    }
  }
}

function hasLengthBetween(a, b) {
  let str = `must be between ${a} and ${b} characters long.`;
  return function (value) {
    if (value !== undefined) {
      if (value.length < a || value.length > b) {
        return str;
      }
    }
  };
}

function isNumber(value) {
  if (value !== undefined) {
    let str = 'must be a number.';
    if (typeof value !== 'number') {
      return str;
    }
  }
}

function isGreaterThan(number) {
  let str = `must be greater than ${number}.`;
  return function (value) {
    if (value !== undefined) {
      if (value <= number) {
        return str;
      }
    }
  };
}

function composeValidators(...validators) {
  return function (fieldName) {
    return function (value) {
      let error;
      for (let i = 0; i < validators.length; i++) {
        error = validators[i](value);
        if (error) {
          let message = `${fieldName} ${error}`;
          return message;
        }
      }
    };
  };
}

let validateName = composeValidators(
  isRequired,
  isString,
  hasLengthBetween(2, 100)
)('Name');

let validateAge = composeValidators(isNumber, isGreaterThan(0))('Age');

function withValidation(arrWithFunctions) {
  return function (func) {
    return function (...arrWithParameters) {
      if (arrWithFunctions.length != arrWithParameters.length) {
        throw new Error(
          'The number of passed functions and arguments is different.'
        );
      }
      let error = [];
      for (let i = 0; i < arrWithFunctions.length; i++) {
        let result = arrWithFunctions[i](arrWithParameters[i]);
        if (result) {
          error.push(result);
        }
      }
      if (error.length > 0) {
        throw new Error(`${error.join(' ')}`);
      }
      return func.call(this, ...arguments);
    };
  };
}

let createUserWithValidation = withValidation([validateName, validateAge])(
  createUser
);
let user = createUserWithValidation('Nastya', 24);
console.log(user);
