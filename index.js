function distanceFromHqInBlocks(street) {
  let blocks = street - 42;
  
  return Math.abs(blocks)
}

function distanceFromHqInFeet(street) {
  let blocks = street - 42;
  let feet = blocks * 264;
  
  return Math.abs(feet)
}

function distanceTravelledInFeet(streetFirst, streetSecond) {
  let streetDif = streetSecond - streetFirst;
  let feetTraveled = streetDif * 264;
  
  return Math.abs(feetTraveled)
}

function calculatesFarePrice(start, destination) {
  let distance1 = (destination*264) - (start*264);
  let distance2 = Math.abs(distance1)
  
  if (distance2 <= 400) {
    return 0
  } else if (distance2 > 2500) {
    return 'cannot travel that far'
  } else if (distance2 > 2000) {
    return 25
  } else if (distance2 > 400 && distance2 < 2000){
    return (distance2-400)*0.02
  }
}