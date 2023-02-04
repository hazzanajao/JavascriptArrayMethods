/*----------- FILTER----------
This will create a new array by keeping the items that returns true.
It is similar to map(), is an higher order function, it will  return true or false when the element exist.

Task 1 : Create an array of price list from 10 - 50
Task 2 : Create a function to return list of price grater than 25.
Task 3 : Create a function to return list of price less than 25.
Task 4 : Create a function to return price value of 30.
Task 5 : Use filter () method.
 */

// Task 1
let myPriceList = [ 10, 15, 20, 25, 30, 35, 40, 45, 50]

// Task 2
function getPriceGreater(than25) {

    return than25 > 25

}
// Task 5
myPriceList.filter(getPriceGreater)

const filteredPriceAbove =  myPriceList.filter(getPriceGreater)

console.log("The list of price greater than 25 are :  " + filteredPriceAbove)

/*--------------------------*/
// Task 3
function getPriceLesser(than25){
    return than25 < 25
}

const filteredPriceBelow = myPriceList.filter(getPriceLesser)

console.log("The list of price less than 25 are :  " + filteredPriceBelow)

/*--------------------------*/

// Task 4: To return price of 30

function getPriceActual1( price30){
    return price30 == myPriceList[4]
}
myPriceList.filter(getPriceActual1)
const actualPrice1 = myPriceList.filter(getPriceActual1)

console.log("The actual price is " + actualPrice1  + ".  NB: Price value was accessed using index number")


function getPriceActual2( price30){
    return price30 === 30
}

myPriceList.filter(getPriceActual2)

const actualPrice2 = myPriceList.filter(getPriceActual2)

console.log("The actual price is " + actualPrice2 + ".  NB: Strict comparison was used as second option")
