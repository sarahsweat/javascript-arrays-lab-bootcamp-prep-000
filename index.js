const app = "I don't do much."

const kittens = ["Milo", "Otis", "Garfield"]

// DESTRUCTIVE

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

// NON - DESTRUCTIVE

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

function  removeFirstKitten(){
  return kittens.slice(1)
}
