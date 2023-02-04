/* Find() is an array method that can be used to search for any number, string or object of an array
*
* Task 1 : create list of array numbers with random numbers and use find() method , to find  number 31 and 41 ,  from
* the list created by you.
*
* Task 2 : Create list of pet names and search for any particular name from the list you have created.
*
* Task 3: Create list of objects ( Car with properties & Methods ) and search for a particular one with Find() method.
*
*
* */

// Solutions
// Task 1a
let myArrayNumbers = [ 1, 3, 5 , 6 , 2 , 4, 7, 9, 11, 13, 15, 17, 19, 10, 12, 14, 16, 20, 31, 40, 50, 48,
    46,41, 60, 61, 62, 42, 67, 57, 43, 100 ]

function getMyActualNumber(actualNumber){

    return actualNumber === 31
}

const actualNumberResult = myArrayNumbers.find( getMyActualNumber)

console.log(actualNumberResult)


// Task 1b

function getMyNumbers( selectiveNumbers ) {
    return selectiveNumbers === 41
}

const mySelectiveNumbers = myArrayNumbers.find(getMyNumbers)

console.log(mySelectiveNumbers)

/* Sorry ! I was just trying thing out here , you can ignore this section below. */

let  searchIndicator = actualNumberResult + mySelectiveNumbers

console.log("The search indicator value is at point  : " + searchIndicator )

if ( searchIndicator == 72)
{

    console.log( "The index of actual Number Result is  " + myArrayNumbers.findIndex(getMyActualNumber))
    console.log( "The index of my selective number is  " + myArrayNumbers.findIndex(getMyNumbers))
    console.log( "The indicator point is when the value aggregate to : " + searchIndicator)
}

if ( searchIndicator == actualNumberResult + mySelectiveNumbers){

    console.log( "The element of myArrayNumbers are : " + myArrayNumbers)
}
// End
console.log( )
console.log( " ----------------------------------")

// Task 2 : Create list of pet names and search for any particular name from the list you have created.
// Solution the data-type here will be string.



let myPetNames =  ['BingoTall','BingoShort', 'BingoFat', 'BingoSlim', 'BingoCute', 'BingoKind' ]

const searchPetName1 = myPetNames.find( function( name ){
    return name === 'BingoCute'
})

console.log( " The pet name is : " + searchPetName1 + " NB: The concept used here is called anonymous function")

const searchPetName2 = myPetNames.find( ( name ) => {
    return name === 'BingoKind'
})

console.log( " The pet name is : " + searchPetName2 + " NB: The concept used here is called arrow Function ")

const searchPetName3 = myPetNames.find( ( name ) =>  name === 'BingoShort')

console.log( " The pet name is : " + searchPetName3 + " NB: The concept used here is called arrow Function better and optimized concept")

// Task 3: Create list of objects ( Car with properties & Methods ) and search for a particular one with Find() method.

// let myObjectArrayFormula = [
// { x:'X-1', y:'y-1', z:'z-1' },
// {x:'X-1', y:'y-1', z:'z-1' },
// {x:'X-1', y:'y-1', z:'z-1' },
// {x:'X-1', y:'y-1', z:'z-1' }]

let myCarArray = [
    {
        name:'Volvo',
        model:'2020',
        price: '25.000 Euro',
        manufacturedCountry:'Finland',
        perHour: 6,
        perMinute : 0.1,
        perSecond : 0.0017,
        returnedToDiffLocation :10,
        computeRentalPrice1: function(){

            return  this.perHour + this.perMinute + this.perSecond * this.returnedToDiffLocation

            console.log(this.computeRentalPrice1())
    }

    },

    {
        name:'Mercedes Benz',
        model:'2021',
        price: '55.000 Euro',
        manufacturedCountry:'Germany',
        perHour: 6,
        perMinute : 0.1,
        perSecond : 0.0017,
        returnedToDiffLocation :10,
        computeRentalPrice2: function(){

            return  this.perHour + this.perMinute + this.perSecond * this.returnedToDiffLocation
            console.log(this.computeRentalPrice2())
        }
    },

    {
        name:'Toyota',
        model:'2022',
        price: '45.000 Euro',
        manufacturedCountry:'Poland',
        perHour: 6,
        perMinute : 0.1,
        perSecond : 0.0017,
        returnedToDiffLocation :10,
        computeRentalPrice3: function(){

            return  this.perHour + this.perMinute + this.perSecond * this.returnedToDiffLocation
            console.log(this.computeRentalPrice3())
        }
    },

]

const myPrice1  = myCarArray.find( getResult1 )

function getResult1( price1 ){
    return price1.computeRentalPrice1()
}
console.log(myPrice1 )

/*------------For Object------------------*/
let myCarObject =
    {
        name: 'Volvo',
        model: '2020',
        price: '25.000 Euro',
        manufacturedCountry: 'Finland',
        perHour: 6,
        perMinute: 0.1,
        perSecond: 0.0017,
        returnedToDiffLocation: 10,
        computeRentalPrice1: function () {

            return this.perHour + this.perMinute + this.perSecond * this.returnedToDiffLocation

            console.log(this.computeRentalPrice1())
        }
    }


const rentalPriceObject= myCarObject.computeRentalPrice1()
console.log( " The rental price is : " +  rentalPriceObject + "€")

