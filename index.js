function distanceFromHqInBlocks(distance){
    let blocks;
    if(distance <= 42){
        blocks = 42 - distance;
        return blocks; 
    } else 
    if(distance >=42){
        blocks = distance -42;
        return blocks;
    }
}

function distanceFromHqInFeet(distance){
    let hqInFeet = distanceFromHqInBlocks(distance) * 264;
    return hqInFeet;

}
function distanceTravelledInFeet(start, destination){
    let distanceInFeet;
    if(start > destination) {
        let blockDistance = start - destination;
        distanceInFeet = blockDistance * 264;
        return distanceInFeet;
    }else if(start < destination){
        let blockDistance = destination - start;
        distanceInFeet = blockDistance * 264;
        return distanceInFeet;
    }
}
function calculatesFarePrice(start, destination){
    let farePrice;
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    if(distanceInFeet <= 400){
        return 0;
    }else if (distanceInFeet > 400 && distanceInFeet <= 2000){
        farePrice = (distanceInFeet - 400) * 0.02;
        return farePrice;
    }else if(distanceInFeet >2000 && distanceInFeet <=2500){
        farePrice = 25;
        return farePrice;
    }else if(distanceInFeet > 2500){
        return 'cannot travel that far';
    }
}