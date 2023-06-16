// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(value){
        return value * multiplier
    }
}
function fareDoubler(fare){
    return fare * 2
}
function fareTripler(fare){
    return fare * 3
}
function selectDifferentDrivers(arrayOfDrivers, driverSelector) {
    return driverSelector(arrayOfDrivers);
  }
  