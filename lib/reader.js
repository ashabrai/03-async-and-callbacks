'use strict';

const fs = require('fs');

const fileReader = module.exports = {};


fileReader.readFirstNCharactersAsync = (arrayPath, callback) => {
  const returnArray = [];

  fs.readFile(arrayPath[0], (error, data) => {
    if (error) {
      callback(error, null);
    }
    returnArray.push(data.toString());

    fs.readFile(arrayPath[1], (fileAError, fileBdata) => {
      if (error) {
        callback(error, null);
      }
      returnArray.push(.toString());

      fs.readFile(arrayPath[2], (fileBError, fileBdata) => {
        if (error) {
          callback(error, null);
        }
        returnArray.push(data.toString());

        if (returnArray[2]) {
          callback(null, returnArray);
          return returnArray;
        }
      });
    });
  });
};
