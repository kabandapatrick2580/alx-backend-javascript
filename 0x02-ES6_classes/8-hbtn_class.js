/**
 * Represents a class at Holberton School with a size and a location.
 */
export default class HolbertonClass {
    /**
     * Constructs a new HolbertonClass instance.
     * @param {number} size - The size of the class.
     * @param {string} location - The location of the class.
     */
    constructor(size, location) {
      // Initialize the size and location properties
      this._size = size;
      this._location = location;
    }
  
    /**
     * Custom conversion method to return a primitive value of the object.
     * @param {string} hint - The conversion hint (string or number).
     * @returns {string|number|null} A primitive value representing the object.
     */
    [Symbol.toPrimitive](hint) {
      // Depending on the conversion hint, return either the location or size property
      if (hint === 'string') {
        return this._location;
      }
      if (hint === 'number') {
        return this._size;
      }
      // If the conversion hint is neither string nor number, return null
      return null;
    }
  }
  