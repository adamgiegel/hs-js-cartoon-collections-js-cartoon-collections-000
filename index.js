function dwarfRollCall(dwarves) {
  let string = ""
  for(let i = 0; i < dwarves.length; i++){
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
    if(foods[i] === "cheddar" || foods[i] === "gouda" || foods[i]=== "camembert"){
      return string += foods[i]
    }
  }
  return "no cheese!"
}
