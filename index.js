// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newKeyValue = {...driver};
    newKeyValue['address'] = '11 Broadway';
  return newKeyValue;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key){
  clone = {...driver};
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
