// Code your solution in this file!
function distanceFromHqInBlocks(number) {
  return Math.abs(number - 42);
}

function distanceFromHqInFeet(number) {
  return Math.abs((number - 42) * 264);
}

function distanceTravelledInFeet(start, finish) {
  return Math.abs((finish - start) * 264);
}

function calculatesFarePrice(start, finish) {
  let cost;
  calculatedFeet = distanceTravelledInFeet(start, finish);
    if (calculatedFeet <= 400) {
      cost = 0;
    } else if (calculatedFeet > 400 && calculatedFeet <= 2000) {
      cost = Math.abs(calculatedFeet - 400) * 0.02;
    } else if (calculatedFeet > 2000 && calculatedFeet < 2500) {
      cost = 25;
    } else if (calculatedFeet > 2500) {
      return 'cannot travel that far';
    }
    return cost;
}