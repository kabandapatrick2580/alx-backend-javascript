function cleanSet(set, startString) {
    // Filter set values that start with startString and map them to the rest of the string
    const filteredValues = Array.from(set)
        .filter(value => value.startsWith(startString))
        .map(value => value.slice(startString.length));

    // Join the filtered values with "-"
    return filteredValues.join("-");
}

export default cleanSet;
