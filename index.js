function distanceFromHqInBlocks(pickupLocation){
    let hqBlock = 42
    let numOfBlocks = pickupLocation - hqBlock
    return Math.abs(numOfBlocks)
}
console.log(distanceFromHqInBlocks(pickupLocation))

function distanceFromHqInFeet(noOfFeet){
    distanceFromHqInBlocks(noOfFeet)
    return distanceFromHqInBlocks(noOfFeet) * 264
}

function distanceTravelledInFeet(start, destination){
    let travelledBlock = Math.abs(destination - start) * 264
    return travelledBlock
}
console.log(distanceTravelledInFeet(start, destination))

function calculatesFarePrice(start, destination){
    let feet = Math.abs(destination - start) * 264
    if (feet <= 400){
       return 0 
    }
    else if (feet > 400 && feet <= 2000){
        return (feet - 400) * 0.02
    }
    else if (feet > 2000 && feet <= 2500){
        return 25
    }
    else if (feet > 2500){
        return 'cannot travel that far'
    }
}
