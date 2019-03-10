 const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  newArray = [...drivers.slice(0), name];
  return newArray;
}

function prependDriver(name){
  newArray = [name, ...drivers.slice(0)];
  return newArray;
}

function removeLastDriver(){
  newArray = [...drivers.slice(0, -1)]
  return newArray;
}

function removeFirstDriver(){
  newArray = [...drivers.slice(1)];
  return newArray;
}
