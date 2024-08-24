// Sum of array
function sum(arr) {
    return arr.reduce((arr, cur) => arr + cur, 0)
}

// Remove duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)]
}

// Find maximum value
function max(arr) {
    return Math.max(...arr)
}

// Find minimum value
function min(arr) {
    return Math.min(...arr)
}

// Get average
function average(arr) {
    return sum(arr) / arr.length
}

// Check if all elements meet a condition
function all(arr, condition) {
    return arr.every(condition)
}

// Check if any element meets a condition
function any(arr, condition) {
    return arr.some(condition)
}

// Filter unique elements 
function unique(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index)
}

// Apply function to each element
function apply(arr, func) {
    return arr.map(func)
}

// Reverse Array
function reverse(arr) {
    return arr.slice().reverse()
}


module.exports = {
    sum,
    removeDuplicates,
    max,
    min,
    average,
    all,
    any,
    unique,
    apply,
    reverse
}