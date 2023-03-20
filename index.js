// Code your solution in this file!
//1
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){

    let firsttwo = [];

    firsttwo.push("Antonia", "Nuru");

    return firsttwo;
}


//2
const returnLastTwoDrivers = function(drivers){

    let lasttwo = [];

    lasttwo.push('Amari', 'Mo');

    return lasttwo;
}

console.log(returnLastTwoDrivers())

//3
const selectingDrivers =[returnFirstTwoDrivers,  returnLastTwoDrivers];

console.log(selectingDrivers[0])

//4
function createFareMultiplier(num){

    return function fareMultiplier(fare){

        fare = fare * num ;
        
        return fare;
    };

}


//5

const fareDoubler = function(fare){

    fare = fare * 2 ;
        
    return fare;
};

//6
const fareTripler = function(fare){

    fare = fare * 3 ;
        
    return fare;
};

//7

function selectDifferentDrivers(drivers, firstTwoDrivers){

    return firstTwoDrivers(drivers);
}

console.log(selectDifferentDrivers(function(drivers){

    let firsttwo = [];

    firsttwo.push("Antonia", "Nuru");

    return firsttwo;
}
 ))

 