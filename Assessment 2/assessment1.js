// Task 1 : 

    // 1. Arrays CRUD (Create, Read, Update, Delete)
    // Question: Write a function manipulateArray that takes an array of integers and returns a new array that performs the following operations:
    // Remove all even numbers.
    // Replace all prime numbers with -1.
    // Add the sum of all remaining numbers to the end of the array.

    function isPrime(number) {
        if (number == 0 || number == 1) {
            return false;
        }
        let numberToLoop = number / 2;
        for (let index = 2; index <= numberToLoop; index++) {
            if (number % index == 0) {
                return false;
            }
        }
        return true;
    }

    function manipulateArray(array){
        let evenArray = array.filter(num => num % 2 !== 0);

        console.log("Even Array :",evenArray);
        
        let primeArray = evenArray.map(num => (isPrime(num) ? -1 : num));

        console.log("Prime Array :",primeArray);

        let sum = primeArray.reduce((total,num)=>total+num,0);
        primeArray.push(sum)

        return primeArray
    }

    let arrayData = [2,3,4,5,6,89,32,12,45,76,22,67,89,21]

    console.log(manipulateArray(arrayData));

// Task 2 :

    // 2. Sorting / Joining / Iteration
    // Question: Write a function customSortAndJoin that takes an array of objects with name and age properties. Sort the objects by age in descending order, and then join the name properties of the sorted objects into a string separated by commas.

    function customSortAndJoin(array){
        // To sort in desending order we have to subtract first object from second object
        array.sort((obj1,obj2)=>obj2.age - obj1.age)
        let personNames  = array.map(person => person.name).join(',')
        return personNames
    }
      
      console.log(customSortAndJoin([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 20 }
      ]));

// Task 3 :

    //   3. Filter / Map / Reduce
    //   Question: Write a function processData that takes an array of strings. Filter out the strings that have fewer than 5 characters, map the remaining strings to their lengths, and then reduce the lengths to calculate their total sum.
      
    function processData(arr) {
        const filterArray = arr.filter(str => str.length >= 5)
        const lengthArray = filterArray.map(str => str.length)
        const totalSum = lengthArray.reduce((acc, length) => acc + length, 0);
        return totalSum
    }
      
    console.log("Sum :",processData(["apple", "banana", "cat", "elephant", "dog"])); 

// Task 4 :
    
    // 4. Spread Operators
    // Question: Write a function deepMergeArrays that takes two arrays of objects. Merge both arrays into a new array without duplicates based on a specific key (id). Use the spread operator to deep merge objects that have the same id.
    
    function deepMergeArrays(arr1, arr2) {
        const mergedObjects = {};
      
        const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
      
        arr1.forEach(obj => {
          mergedObjects[obj.id] = { ...obj };
        });
      
        arr2.forEach(obj => {
        
          if (mergedObjects[obj.id]) {
            mergedObjects[obj.id] = mergeObjects(mergedObjects[obj.id], obj);
          } else {
            mergedObjects[obj.id] = { ...obj };
          }
        });
      
        return Object.values(mergedObjects);
      }
      
      const array1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
      const array2 = [{ id: 1, age: 25 }, { id: 3, name: "Charlie" }];
      
      const mergedArray = deepMergeArrays(array1, array2);
      console.log(mergedArray);

// Task 5 :

    //   5. Set
    //   Question: Write a function intersectionOfSets that takes two arrays of numbers and returns an array of their intersection (i.e., numbers present in both arrays) using Set.
      
      
      function intersectionOfSets(arr1, arr2) {
        const setArray2 = new Set(arr2)
        const set1Array = [...setArray2];
        let common_elements = [];

        for (const element of arr1){
            if(set1Array.includes(element)){
                common_elements.push(element);
            }
        }

        return common_elements
      }
      
      console.log(intersectionOfSets([1, 2, 3, 4], [3, 4, 5, 6]));


// Task 6 :

    // 6. Map
    // Question: Write a function groupByAge that takes an array of objects with name and age properties. Return a Map where the keys are age values and the values are arrays of names that correspond to that age.
    function groupByAge(persons) {
        const personAgeMap = new Map()

        for (let person of persons) {
            if(personAgeMap.has(person.age)){
                personAgeMap.get(person.age).push(person.name)
            } else{
                personAgeMap.set(person.age,[person.name])
            }
        }
        return personAgeMap
    }

    console.log(groupByAge([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
    ]));

// Task 7 :

    // 7. Hoisting
    // Question: Consider the following code. Explain the output javascript
    
    function hoistTest() {
        console.log(x); 
        var x = 10; 
        let y = 20;
        console.log(y);
    }
    hoistTest();

    // Explanation : JS basically moves (or "hoists") the declarations of variables to the top of their scope during the compile phase, before code execution.
    // For variables declared with var, only the declaration (not the assignment) is hoisted. that's the reason you can see first it logs undefind then 20.

// Task 8 : 

    // Question: Write a function computeAverage that takes a minimum of 2 numbers. Any additional arguments passed should also be considered for calculating the average. 
    // If no extra numbers are passed, return a default message: "Not enough numbers".


    function computeAverage(a, b, ...rest) {
        if(rest.length == 0){
            return "Not Enough Values"
        }
        const elements = [a, b, ...rest]
        len  = elements.length
        let sum = 0;
        for (let index = 0; index < len; index++) {
            sum+=elements[index]
        }

        return sum / len
    }

    console.log("Average : ", computeAverage(4, 8));          // Expected output: "Not enough numbers"
    console.log("Average : ", computeAverage(4, 8, 12, 16));  // Expected output: 10
  
// Task 9 :

// Question: Write a function safeDivision that takes two numbers as arguments and returns their division result. If the second argument is 0, throw an error, and catch it with a meaningful message.

    function safeDivision(a, b) {
        try{
            if (b == 0) { throw new Error("Division by zero is not allowed.") }
            return a/b
        } catch(error){
            return error.message
        }
    }
    
    console.log(safeDivision(10, 2)); // Expected output: 5
    console.log(safeDivision(10, 0)); // Expected output: "Division by zero is not all

// Task 10 :

// Question: Write a class Person that has a name property and a method introduce. Inside introduce, use the this keyword to refer to the object's name property. Create two instances of Person and call introduce. 
// Also, bind the introduce method of one instance to another instance and call it.

class Person {
    constructor(name) {
      this.name = name;
    }
  
    introduce() {
      console.log("Hi, my name is ",this.name);
      
    }
  }
  
  const person1 = new Person("Alice");
  const person2 = new Person("Bob");
  
  person1.introduce();
  person2.introduce();
  
  const introduceBound = person1.introduce.bind(person2);
  introduceBound(); 