// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver,{[key]: value})
}

function deleteFromDriverByKey(driver, key) {
  new_object = Object.assign({}, driver, key)
  delete new_object[key];
  return new_object
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver
}
