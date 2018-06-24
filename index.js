// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  if (block > 42) {
    let calc = block - 42
    return calc 
  } else if  (block < 42) {
    let calc = 42 - block
    return calc 
  } 

}

function distanceFromHqInFeet(block) {
  let feetcalc = distanceFromHqInBlocks(block) * 264
  return feetcalc
}

function distanceTravelledInFeet(block1, block2) {
  if (block1 < block2) {
  let feetTravel = (block2 - block1) * 264
  return feetTravel
  } else if (block2 < block1) {
  let feetTravel = (block1 - block2) * 264
  return feetTravel
  }
}

function calculatesFarePrice(block1, block2) {
    if (distanceTravelledInFeet(block1, block2) < 400) {
    let priceCalc = 0 
    return priceCalc
    } else if ( distanceTravelledInFeet(block1, block2) > 400 && distanceTravelledInFeet(block1, block2) <= 2000) {
    let priceCalc = ( distanceTravelledInFeet(block1, block2) - 400) * .02
    return priceCalc
    } else if (distanceTravelledInFeet(block1, block2) > 2000 && distanceTravelledInFeet(block1, block2) <= 2500) {
      let priceCalc = 25 
      return priceCalc
    } else if (distanceTravelledInFeet(block1, block2) > 2500) {
      let priceCalc = 'cannot travel that far'
      return priceCalc
    }
}