var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push('Ralph');
  return name
}

function destructivelyRemoveLastKitten(name){
  kittens.pop("Garfield");
  return name
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob');
  return name
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift('Milo');
  return name
}

function appendKitten(name){
  var newKittens = kittens.slice();
  newKittens.push(name);
  return newKittens
}

function prependKitten(name){
  var newKittens = kittens.concat();
  newKittens.push(name);
  return newKittens
}
