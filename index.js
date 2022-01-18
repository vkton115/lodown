'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: function takes in a parameter of any value and returns that value unchanged
 * @param {any value} : takes in a parameter of value representing any value
 * @returns {value}: returns the input value unchanged
 * 
 */

function identity(value){
    return value;
}

module.exports.identity = identity;

/**
 * typeOf: function takes in a parameter of any value and returns the type of value as a string.
 * @param {any value} : takes in a parameter of a value representing any value
 * @returns {string}: returns the type of value as a string
 * 
 */

function typeOf(value){
    if (typeof value !== "object"){
        return typeof value;
    } else if (Array.isArray(value)) {
        return "array";
    } else if (value === null){
        return "null";
    } else if (value instanceof Date === true){
        return "date";
    } else if (typeof value === "object") {
        return "object";
    }
}

module.exports.typeOf = typeOf;

/**
 * first: function takes in parameteres of an array and a number and returns the first number(s) of that array
 * @param {an array} : takes in a parameter of an array
 * @param {a number} : takes in a number representing the number of items to return
 * @returns {empty array}: returns an empty array if the array parameter is not an array
 * @returns {element of array} : returns the first element of an array if the number parameter is not give or not a number.
 * @returns {an array} : returns the first number(s) of item(s) of the array as an array.
 * 
 */

function first(array, number){
    if (Array.isArray(array) === false){
        return [];
    } else if (number === NaN || number === undefined){
        return array[0];
    } else if (number < 0){
        return [];
    } else if (number > 0){
        return array.slice(0, number);
    }
}

module.exports.first = first;

/**
 * last: function takes in parameteres of an array and a number and returns the last number(s) of that array
 * @param {an array} : takes in a parameter of an array
 * @param {a number} : takes in a number representing the number of items to return
 * @returns {empty array}: returns an empty array if the array parameter is not an array
 * @returns {element of array} : returns the last element of an array if the number parameter is not give or not a number.
 * @returns {an array} : returns the last number(s) of item(s) of the array as an array.
 * 
 */

function last(array, number){
    if (!(Array.isArray(array))){
        return [];
    } else if (typeof number !== "number"){
        return array[array.length-1]
    } else if (number < 0){
        return [];
    } else if (number > array.length){
        return array
    } else if (number < array.length){
        return array.slice(- number)
    }    
}

module.exports.last = last;

/**
 * indexOf: function takes in parameteres of an array and a value and returns the index of the array that has the first occurrence of that value
 * @param {an array} : takes in a parameter of an array
 * @param {any value} : takes in a parameter of a value that represents any value
 * @returns {index}: returns the index of the array that has the first occurence of the value
 * @returns {-1}: returns a -1 if the value is not in the array
 * 
 */

function indexOf(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    } return -1    
}

module.exports.indexOf = indexOf;

/**
 * contains: function takes in parameters of an array and a value and returns a boolean value depending on whether the array contains that value
 * @param {an array} : takes in a parameter of an array
 * @param {any value} : takes in a parameter of a value that represents any value
 * @returns {true}: returns true if the value exists in the array
 * @returns {false}: returns false if the value does not exist in the array
 * 
 */

function contains(array, value){
    return (array.includes(value) ? true : false)
}

module.exports.contains = contains;

/**
 * unique: function takes in parameter of an array and returns a new array with any duplicate values removed
 * @param {an array} : takes in a parameter of an array
 * @returns {an array}: returns a new array with any recurring values removed
 * 
 */

function unique(array){
    var arr = [];
    for (let i = 0; i < array.length; i++){
        if (_.indexOf(arr, array[i]) === -1){
            arr.push(array[i]);
        }
    } return arr; 
}

module.exports.unique = unique;

/**
 * filter: function takes in parameter of an array and a function and calls the function for each element in the array.
 * returns a new array of elements that the functioned returned true.
 * @param {an array} : takes in a parameter of an array
 * @param {function} action: the function is to be applied to each value of the array passing arguments of: the element, its index, and the array.
 * @returns {an array}: returns a new array of elements for which the function returned true
 * 
 */

function filter(array, func){
    var arr = [];
    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            arr.push(array[i]);
        }
    } return arr;
}

module.exports.filter = filter;

/**
 * reject: function takes in parameter of an array and a function and calls the function for each element in the array.
 * returns a new array of elements that the functioned returned false.
 * @param {an array} : takes in a parameter of an array
 * @param {function} action: the function is to be applied to each value of the array passing arguments of: the element, its index, and the array.
 * @returns {an array}: returns a new array of elements for which the function returned false.
 * 
 */

function reject(array, func){
    var arr = [];
    for (let i = 0; i < array.length; i ++){
        if (!(func(array[i], i, array))){
            arr.push(array[i]);    
        }
    } return arr;
}
module.exports.reject = reject;

/**
 * partition: function takes in parameter of an array and a function and calls the function for each element in the array.
 * returns an array with 2 sub-arrays that representing truthy and falsy values.
 * @param {an array} : takes in a parameter of an array
 * @param {function} action: the function is to be applied to each value of the array passing arguments of: the element, its key, and the array.
 * @returns {an array}: returns an array with two sub arrays in it. One of the array represents the truthy values of the parameter array, and the other the false values.
 * 
 */

function partition(array, func){
    var mainArr = [];
    var truthyArr = [];
    var falsyArr = [];
    for (let i = 0; i < array.length; i++){
        (func(array[i], i, array) ? truthyArr.push(array[i]) : falsyArr.push(array[i]))
    }
    mainArr.push(falsyArr);
    mainArr.unshift(truthyArr);
    return mainArr;   
}

module.exports.partition = partition;

/**
 * map: function takes in parameters of a collection (array or object) and a function and calls that function for each element of the collection.
 * if the collection is an array, the arguments the function passes are: the element, its index, and the array.
 * if the collection is an object, the arguments the function passes are: the value, its key, and the object.
 * returns a new array containing the return values of each function call
 * @param {a collection}: takes in the parameter of an array or an object
 * @param {function} action: the function is to be applied to each value of the array passing arguments depending on if the collection is an array or an object.
 * @returns {an array}: returns a new array containing the return values of each function call
 * 
 */

function map(collection, func){
    var outputArr = [];
    if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            outputArr.push(func(collection[i], i, collection));
        }
    } else {
        for (var key in collection){
            outputArr.push(func(collection[key], key, collection));
        }
    }
    return outputArr;
}


module.exports.map = map;

/**
 * pluck: function takes in parameters of an array and a property and returns an array containing the value of the property for every element in the array.
 * @param {an array}: takes in a parameter of an array of objects
 * @param {property}: takes in a parameter of a property
 * @returns {an array}: returns a new array containing the values of property for every element in the array.
 * 
 */

function pluck(array, prop){
    return _.map(array, function(current){
        return current[prop]
    });
}

module.exports.pluck = pluck;

/**
 * every: function takes in parameters of a collection and a function and calls the function for each element of the collection
 * @param {collection} : takes in a parameter of an array or object
 * @param {function} action: if collection is an array, calls the function passing in the arguments of: the current element, its index, and the array
 * @param {function} action: if collection is an object, calls the function passing in the arguments of: current value, current key, the object.
 * @returns {true}: returns true if the return value of calling the function for every element returns true. If function is not provided, returns true if every element is truthy.
 * @returns {false}: returns false if the return value of any element called by the function returns false. If function is not provided, returns false if any element is falsy.
 * 
 */

function every(collection, func){
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (typeof func === "undefined"){
                if (!(collection[i])){
                    return false;
                }
            } else if (!(func(collection[i], i, collection))){
                return false;
            }
        } return true;
    } else if (!(Array.isArray(collection))){
        for (var key in collection){
            if (typeof func === "undefined"){
                if (!(collection[key])){
                    return false;
                }
            } else if (!(func(collection[key], key, collection))){
                return false;
            }
        } return true;
    }
}

module.exports.every = every;

/**
 * some: function takes in parameters of a collection and a function and calls the function for each element of the collection
 * @param {collection} : takes in a parameter of an array or object
 * @param {function} action: if collection is an array, calls the function passing in the arguments of: the current element, its index, and the array
 * @param {function} action: if collection is an object, calls the function passing in the arguments of: current value, current key, the object.
 * @returns {true}: returns true if the return value of calling the function for at least element returns true. If function is not provided, returns true if at least one element is truthy.
 * @returns {false}: returns false if the return value of every element called by the function returns false. If function is not provided, returns false if every element is falsy.
 * 
 */

function some(collection, func){
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (typeof func === "undefined"){
                if ((collection[i])){
                    return true;
                }
            } else if ((func(collection[i], i, collection))){
                return true;
            }
        } return false;
    } else if (!(Array.isArray(collection))){
        for (var key in collection){
            if (typeof func === "undefined"){
                if ((collection[key])){
                    return true;
                }
            } else if ((func(collection[key], key, collection))){
                return true;
            }
        } return false;
    }
}

module.exports.some = some;

/**
 * reduce: function takes in parameters of an array, a function, and a seed. returns the value of the final function call.
 * @param {array}: takes in a parameter of an array
 * @param {function} action: calls function for every element of an array passing the arguments: previous result, element, and index.
 * @param {seed value}: takes in the parameter of a seed value which will represent the previous result for the 1st iteration of the loop.
 * @returns {value}: returns the value of the last iteration of the function call.
 * 
 */

function reduce(array, func, seed){
    var prevResult;
    for (let i = 0; i < array.length; i++){
        if (i === 0 && seed === undefined){
            prevResult = array[0];
        } else if (i === 0){
            prevResult = func(seed, array[i], i);
        } else if (i > 0){
            prevResult = func(prevResult, array[i], i);
        }
    }
    return prevResult;
}

module.exports.reduce = reduce;

/**
 * extend: function takes in the parameter(s) of an object or multiple objects
 * @param {object}: takes in a parameter(s) of any number of objects
 * @returns {value}: returns first object passed as a parameter with added properties of all other objects passed in as parameters.
 * 
 */

function extend(mainObj, ...obj){
    for (let i = 0; i < obj.length; i++){
        Object.assign(mainObj, obj[i])
}
return mainObj;
}

module.exports.extend = extend;