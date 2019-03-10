// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const copyDrivers = drivers.slice();
  copyDrivers.push(name);
  return copyDrivers;
}

function prependDriver(name) {
  const copyDrivers = drivers.slice();
  copyDrivers.unshift(name);
  return copyDrivers;
}

function removeLastDriver() {
  const copyDrivers = drivers.slice();
  copyDrivers.pop(name);
  return copyDrivers;
}

function removeFirstDriver() {
  const copyDrivers = drivers.slice();
  copyDrivers.shift(name);
  return copyDrivers;
}
