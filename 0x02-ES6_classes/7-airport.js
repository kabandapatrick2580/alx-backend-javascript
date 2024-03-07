/**
 * Represents an airport with a name and a code.
 */
export default class Airport {
    /**
     * Constructs a new Airport instance.
     * @param {string} name - The name of the airport.
     * @param {string} code - The code of the airport.
     */
    constructor(name, code) {
      // Initialize the name and code properties
      this._name = name;
      this._code = code;
    }
  
    /**
     * Returns a string representation of the airport.
     * @returns {string} A string representation of the airport.
     */
    toString() {
      // Returns a string representation using the airport code
      return `[object ${this._code}]`;
    }
  }
  