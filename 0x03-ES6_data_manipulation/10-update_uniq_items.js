function updateUniqueItems(map) {
    // Check if the argument is a Map
    if (!(map instanceof Map)) {
        throw new Error("Cannot process");
    }

    // Iterate over each entry in the map
    for (let [key, value] of map.entries()) {
        // If the quantity is 1, update it to 100
        if (value === 1) {
            map.set(key, 100);
        }
    }
}

export default updateUniqueItems;
