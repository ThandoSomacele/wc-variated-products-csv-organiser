exports.cleanCSVObjectsArray = (outputCSVObjectsArray, [...attributes]) => {
  // loop over the csvObjectsArray ObjectsArray value
  const modifiedCSVObjectsArray = outputCSVObjectsArray.map((obj) => {
    // loop over each ...attibutes string values and remove line breaks and split string into an array
    attributes.map((attr) => {
      obj[attr] = obj[attr]
        .replace(/(\r\n|\n|\r)/gm, '')
        .split(',')
        .map((element) => {
          return element.trim();
        });
    });
    return obj;
  });
  return modifiedCSVObjectsArray;
};
