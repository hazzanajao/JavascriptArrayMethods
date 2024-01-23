// Example 1:
let myArrayNums = [ 4, 6, 8, 10, 12 ]

//Task: create a custom function to double each elements of the array, using clean code principles .
function doubleMyArrayNum( arrayElement ){
    return arrayElement * 2
}

const doubledElements = myArrayNums.map(doubleMyArrayNum)

console.log(" The doubled returned elements are :" + doubledElements )
/* Hint: The relevance and use case, image the initial element of the array were old prices and you need to doubled each
prices*/


// Example 2 :

let myArray = [5, 7, 9, 11, 13  ]
//Task: create a custom function to subtract "1" from each elements of the array, using clean code principles.

function subFromArrayElements( myArrayElement ) {
    return myArrayElement - 1
}

const subtractedElements = myArray.map( subFromArrayElements)
console.log("The returned subtracted elements are : " + subtractedElements)
/* Hint: The relevance and use case, imagine the initial element of the array were old prices and you need to reduce the
price during promo season */

// Example 3 :

let arrayElement = [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
//Task: create a custom function to add "5" to each elements of the array, using clean code principles.

function addToEachElement( number ){
    return number + 5
}

const  addedToNumbers = arrayElement.map( addToEachElement)

console.log(" The are the returned new elements with added value: " + addedToNumbers)

//Example 4:
// Hint: This contain array of objects
let products = [

    { name: "Phone", price:120, manufactured_Date:"12-02-2022", quantity:"57", manufactured_country:"Finland" },
    { name: "Computer", price:1120, manufactured_Date:"12-04-2022", quantity:"59", manufactured_country:"Finland"},
    { name: "Modem", price:220, manufactured_Date:"12-06-2022", quantity:"17", manufactured_country:"Finland"},
    { name: "Bicycle", price:"20", manufactured_Date:"12-08-2022", quantity:"58", manufactured_country:"Finland"}

]

// Task: Create a function to get all product prices and reduce it by 50%, because of our new promo-price.
function getAllProductPrice(priceList ){

    return priceList.price / 2
}

const halvePrices = products.map(getAllProductPrice)

console.log("The new promo prices are : " + halvePrices )

//Example 5:
// Task: Create a function to get all products.
function getAllProducts( allProducts ){

    return allProducts.name
}
const productNames = products.map(getAllProducts)

console.log("The products are : " + productNames)

let myArrayMap = [ 1,2,3,4]
const result = myArrayMap.map((x)=>(x * 2))
console.log(result)

 myArrayMap.forEach(
     (x) => {
         console.log(x*11)
     }
 )

