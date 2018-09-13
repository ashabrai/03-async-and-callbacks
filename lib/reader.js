'use strict';

const fs = require ('fs');

const fileReader = module.exports={};


fileReader.readFirstNCharactersAsync = (arrayPath,callback) => {

    let returnArray = [];

    console.log(`Reading ${arrayPath}`);

        fs.readFile(arrayPath[0], (error, data) => {
                if (error) throw error;
                callback(error,null);
                returnArray.push(data.toString());

                fs.readFile(arrayPath[1], (error, data) => {
                        if (error) throw error
                        callback(error,null);
                        returnArray.push(data.toString());

                        fs.readFile(arrayPath[2], (error, data) => {
                            if (error) throw error;
                                callback(error,null);
                                returnArray.push(data.toString());

                            if (returnArray[2]) {
                                callback(returnArray);
                                return returnArray;
                        }
                    });
                });
            });
        };