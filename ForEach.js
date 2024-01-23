/* forEach:  is a higher order function that expect another function, here below I am going to use foreach (), to perform
*  three tasks:
*
* Task 1: Create a function to multiply elements of myArray by 5.
* Task 2: Create a function to minus 5 from elements of myArray.
* Task 3: Create a function to add +5 to elements of myArray.
*
* Give that myArray1 = [ 10, 15, 20, 25, 30, 35, 40, 45, 50 ]
* Give that myArray2 = [ 10, 15, 20, 25, 30, 35, 40, 45, 50 ]
* Give that myArray3 = [ 10, 15, 20, 25, 30, 35, 40, 45, 50 ]
* */

let myArray1 = [ 10, 15, 20, 25, 30, 35, 40, 45, 50  ]  // ---------------------step (1)

let myMultipliedArrayValues = [ ] // The value will be stored here soon, but lets make it available. // ---------------------step (2)

function createMultiplication( elements ) {  // This is a complete different function, that has no connect yet with the "myArray".  // ---------------------step (3)
    myMultipliedArrayValues.push(elements * 5)
}

/*Hint: To establish the connection we need to pass it has parameter into foreach( ) and bind it to "myArray"*/

myArray1.forEach(createMultiplication) // ---------------------step (5)

console.log(" For verifications,  myArray elements are : " + myArray1 +" " + " Multiplied values are : " + myMultipliedArrayValues)

console.log( myMultipliedArrayValues) // ---------------------step (6)

// Task 2: Create a function to minus 5 from elements of myArray.

let myArray2 = [ 10, 15, 20, 25, 30, 35, 40, 45, 50 ]

myMinusArrayValues = [ ]

function createMinus( element2 ) {
   myMinusArrayValues.push( element2 - 5) // map simply use return no push()
}

myArray2.forEach(createMinus)

console.log(" For verifications,  myArray2 elements are : " + myArray2 +" " + " Minus values are : " + myMinusArrayValues)
console.log( myMinusArrayValues)

myArray2.forEach(
    function createMinus( x ) {
        myMinusArrayValues.push( x - 1)
    }
)
console.log(myMinusArrayValues)
