function dwarfRollCall(dwarves) {
  let string = ""
  for(let i = 0; i < dwarves.length/2; i++){
    string += ((i + 1) + '.' + " " + dwarves[i] + " ")
  }
  return string
}

function summonCaptainPlanet(planeteerCalls){
  let newArr = []
  for(let i = 0; i < planeteerCalls.length; i++){
    newArr.push(planeteerCalls[i].toUpperCase + "!")
  }
  return newArr
}

function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++){
    return words[i].length > 4
  }
}

function findTheCheese (foods) {
  let string = ''
  for(let i = 0; i < foods.length; i++){
    if(foods[i] === "cheddar" || foods[i] === "gouda" || foods[i]=== "camembert" || foods[i] === "swiss"){
      return string += foods[i]
    }
  }
  return "no cheese!"
}

wordsWithB([‘barn’, ‘house’, ‘apartment’]) => [‘barn’]
wordsWithB([‘barn’, ‘house’, ‘bungalow’]) => [‘barn’, ‘bungalow’]
wordsWithB([‘flat’, ‘house’, ‘apartment’]) => []

function wordsWithB(array){
  let newArr = []
  for(let i = 0; i < array.length; i++){
    if(array[i].charAt(0) === "b"){
      newArr.push(array[i])
    }
    return newArr
  }
}
