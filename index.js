function dwarfRollCall(dwarves) {
  let string = ""
  for(let i = 0; i < dwarves.length; i++){
<<<<<<< HEAD
    string += ((i + 1) + '.' + " " + dwarves[i] + " ")
=======
    string += ((i + 1) + '.' + dwarves[i])
>>>>>>> f6474e2db12cd90bbb213e4ed92e70b158365649
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

function wordsWithBee
