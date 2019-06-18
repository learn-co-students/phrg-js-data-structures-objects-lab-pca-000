const driver = {
  // 'name:': 'Sam',
  // 'address': '12 Broadway'
}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver };
  newDriver[key] = value;

  return newDriver;
}

function destructivelyUpdateObject (obj, key, value) {
  obj[key] = value;

  return obj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  const newestDriver = destructivelyUpdateObject(driver, key, value);

  return newestDriver
}

function nondestructivelyUpdateObject(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function deleteFromDriverByKey(driver, key) {
  const veryNewDriver = nondestructivelyUpdateObject(driver, key)

  return veryNewDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.name;
  return driver
}
