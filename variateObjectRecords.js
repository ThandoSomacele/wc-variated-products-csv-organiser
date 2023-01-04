exports.variateObjectRecords = (
  arrayOfUnvariatedRecordObjects,
  newArrayOfVarietdObjectRecords,
  productsAttributesArray
) => {
  // console.log(arrayOfUnvariatedRecordObjects);

  // Loop over each Unvariated unvariatedRecordObject in Array
  arrayOfUnvariatedRecordObjects.forEach((unvariatedRecordObject) => {
    // console.log(unvariatedRecordObject);

    // Create an Array of only "Attribute X value(s)" found in the unvariatedRecordObject
    const arrayOfValuesAttributeKeys = Object.keys(
      unvariatedRecordObject
    ).filter((key) => {
      // console.log(key);
      if (
        // Check and return only Keys that match any of the "Attribute X value(s)" found in the arrayOfVariationsAttributeKeysarrayOfVariationsAttributeKeys
        productsAttributesArray.some((attribute) => attribute === key) &&
        Array.isArray(unvariatedRecordObject[key])
      )
        return key;
    });

    // console.log(arrayOfValuesAttributeKeys);
    // Create a new Array of Variated Object Records
    arrayOfValuesAttributeKeys.forEach((valuesAttributeKey) => {
      // console.log(unvariatedRecordObject[valuesAttributeKey]);

      const newArrayOfObjectRecords = unvariatedRecordObject[
        valuesAttributeKey
      ].map((variation) => {
        const createNewObjectRecords = () => {
          // delete unvariatedRecordObject[valuesAttributeKey];
          const objectRecord = {
            ...unvariatedRecordObject,
            [valuesAttributeKey]: variation,
          };
          return objectRecord;
        };
        return createNewObjectRecords();
      });

      newArrayOfVarietdObjectRecords.push(...newArrayOfObjectRecords);
    });
  });
};
