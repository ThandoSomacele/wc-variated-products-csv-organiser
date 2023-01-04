// Step 1: Spread and convert longest array into ObjectsArray propeties within output array (ObjectsArray)

exports.arrayToObjectsArray = (inputObjectsArray, outputObjectsArray) => {
  // console.log(inputObjectsArray);
  // loop over each ObjectsArray in array

  const newObjectsArray = inputObjectsArray.forEach((obj) => {
    // loop over specific array property values

    const objArraysToLoop = Object.keys(obj).filter((key) => {
      if (
        (key === 'Attribute 1 value(s)' && Array.isArray(obj[key])) ||
        (key === 'Attribute 2 value(s)' && Array.isArray(obj[key])) ||
        (key === 'Attribute 3 value(s)' && Array.isArray(obj[key])) ||
        (key === 'Attribute 4 value(s)' && Array.isArray(obj[key])) ||
        (key === 'Attribute 5 value(s)' && Array.isArray(obj[key]))
      )
        return key;
    });

    const newArrayObjectsArrays = objArraysToLoop.forEach((arrName) => {
      // create new ObjectsArray from array value with all other previous properties

      const arrayOfNewObjectsArrays = obj[arrName].map((v) => {
        const newObjectsArray = new Object({ ...obj, [arrName]: v });
        return newObjectsArray;
      });
      outputObjectsArray.push(...arrayOfNewObjectsArrays);
    });
  });
};
