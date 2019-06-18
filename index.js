const driver = {
  name: "Sam",

}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value })
}

function deleteFromDriverByKey(driver, key) {
  let newDriver = delete driver.key;
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
   delete driver[key];
    console.log(key)
    return driver;
  }
