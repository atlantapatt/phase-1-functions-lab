// Code your solution in this file!
function distanceFromHqInBlocks(number) {
    const numberOfBlocks = Math.abs(number - 42)
    return numberOfBlocks
}

function distanceFromHqInFeet(number) {
    const distanceFeet = distanceFromHqInBlocks(number) * 264
    return distanceFeet
}

function distanceTravelledInFeet(number, number2) {
    const feetTraveled = Math.abs((number - number2) * 264)
    return feetTraveled
}

function calculatesFarePrice(number, number2) {
    const farePrice = distanceTravelledInFeet(number, number2)
    if (farePrice < 400) 
    return 0
    else if (farePrice > 2500)
    return "cannot travel that far"
    else if (farePrice > 2000)
    return 25
    else if (farePrice > 400)
    return ((farePrice - 400)* .02)
}