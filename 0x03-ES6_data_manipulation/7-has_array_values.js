function hasValuesFromArray(set, array) {
    // Check if all elements in the array exist within the set
    return array.every(element => set.has(element));
}

export default hasValuesFromArray;
