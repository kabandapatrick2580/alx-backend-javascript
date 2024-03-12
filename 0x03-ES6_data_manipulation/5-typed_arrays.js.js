function createInt8TypedArray(length, position, value) {
    // Check if the position is within the range of the array length
    if (position < 0 || position >= length) {
        throw new Error("Position outside range");
    }

    // Create a new ArrayBuffer with the specified length
    const buffer = new ArrayBuffer(length);

    // Create a new Int8Array view of the buffer
    const int8Array = new Int8Array(buffer);

    // Set the value at the specified position
    int8Array[position] = value;

    return buffer;
}
export default createInt8TypedArray