// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let blocks = street - 42;
  
  return Math.abs(blocks)
}

function distanceFromHqInFeet(street) {
  let blocks = street - 42;
  let feet = blocks * 264;
  
  return Math.abs(feet)
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  let streetDif = endingBlock - startingBlock;
  let feet = streetDif * 264
  
  return Math.abs(feet)
}

function calculatesFarePrice(startingBlock, endingBlock) {
  let feet = distanceTravelledInFeet(startingBlock, endingBlock);
  if (feet <= 400) {
    return 0
  } else if (400 < feet && feet <= 2000) {
    return Math.abs((feet-400) * 0.02)
  } else if (2000 < feet && feet <= 2500) {
    return 25
  } else if (feet > 2500); {
    return 'cannot travel that far'
  }
} 
  
  