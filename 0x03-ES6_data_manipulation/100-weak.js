// Define and export the weakMap instance
export const weakMap = new WeakMap();

// Define and export the queryAPI function
export function queryAPI(endpoint) {
    // Get the current count from the weakMap or initialize it to 0
    let count = weakMap.get(endpoint) || 0;

    // Increment the count
    count++;

    // Update the count in the weakMap
    weakMap.set(endpoint, count);

    // Check if the count is greater than or equal to 5
    if (count >= 5) {
        throw new Error('Endpoint load is high');
    }
}
