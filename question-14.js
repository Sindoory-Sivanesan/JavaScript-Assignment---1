
function findCommonElements(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

console.log(findCommonElements([1, 2, 3], [3, 4, 5])); // [3]