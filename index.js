// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value })
}

function deleteFromDriverByKey(driver, key) {
  // Object.assign({}, driver, {[key]: value })
  const clone = Object.assign({}, driver)

  delete clone[key]

  return clone
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  Object.assign(driver)

  delete driver[key]

  return driver
}
