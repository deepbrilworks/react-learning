// 1. Variable and Constants: Swap Two Variables Without a Temporary Variable

const v1 = 50;
let v2 = 20;
v2 = (v2 * v1) / v2;

console.log("Value 2 : " + v2);
// we can not change the value of constant. hence, v1 = 50
console.log("Value 1 : " + v1);

// 2. Primitive Types and Dynamic Typing: Detect Data Types in an Array

function countDataTypes(type_checking_array) {
  let datatype_counting = {};
  for (let index = 0; index < type_checking_array.length; index++) {
    let element_type = typeof type_checking_array[index];
    if (datatype_counting[element_type]) {
      datatype_counting[element_type]++;
    } else {
      datatype_counting[element_type] = 1;
    }
  }
  return datatype_counting;
}

type_checking_array = ["dummy", 12, true, undefined, null, false, "hello"];
console.log(countDataTypes(type_checking_array));

// 3. Objects: Merge and Modify Object Properties

function mergeObjects(obj1, obj2) {
  keys = {};
  for (let key in obj1) {
    keys[key] = obj1[key];
  }

  for (let key in obj2) {
    if (key in keys) {
      keys[key] += obj2[key];
    } else {
      keys[key] = obj2[key];
    }
  }
  return keys;
}

const obj1 = { a: 1, b: 5, c: 23, d: 14, e: 20 };
const obj2 = { z: 78, p: 41, d: 45, k: 54, s: 21 };

console.log(mergeObjects(obj1, obj2));

// 4. Arrays and Functions: Create a Function to Find the Second Largest Number

function findSecondLargetNumber(arr) {
  firstLargestNumber = arr[0];
  secondLargestNumber = arr[0];
  for (let index = 0; index < arr.length; index++) {
    value = arr[index];
    if (arr[index] > firstLargestNumber) {
      secondLargestNumber = firstLargestNumber;
      firstLargestNumber = value;
    }
  }
  return secondLargestNumber;
}

arr = [23, 43, 76, 112, 43, 54, 12, 43, 22, 56, 65, 21];

console.log(findSecondLargetNumber(arr));

// 5. Control Flow and Operators: Implement FizzBuzz with a Twist

function isPrime(number) {
  if (number == 0 || number == 1) {
    return false;
  }
  number_to_loop = number / 2;
  for (let index = 2; index <= number_to_loop; index++) {
    if (number % index == 0) {
      return false;
    }
  }
  return true;
}

function fizzBuzzTwist() {
  for (let index = 1; index <= 50; index++) {
    let final_output = "";
    if (index % 3 == 0) {
      final_output += " Fizz";
    }
    if (index % 5 == 0) {
      final_output += " Buzz";
    }
    if (index % 3 == 0 && index % 5 == 0) {
      final_output += " FizzBuzz";
    }

    if (isPrime(index)) {
      final_output += " Prime";
    }
    console.log(final_output);
  }
}

fizzBuzzTwist();
