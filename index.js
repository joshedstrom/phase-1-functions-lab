const hq = 42
const feet = 264

function distanceFromHqInBlocks(pickUp) {
    if (pickUp > hq) {
        return pickUp - hq;
    }
    else if (pickUp < hq) {
        return hq - pickUp;
    }
}

function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) * feet;
}


function distanceTravelledInFeet(north, south) {
    if (north > south) {
        return ((north - south) * feet);
    }
    else if (north < south) {
        return ((south - north) * feet);
    }
    else {
        return feet
    }
}


function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <=2000) {
        return 0.02 * (distanceInFeet - 400);
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}