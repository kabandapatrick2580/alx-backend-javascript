/**
 * Represents a building with a specified square footage.
 */
export default class Building {
    /**
     * Constructs a new Building instance.
     * @param {number} sqft - The square footage of the building.
     */
    constructor(sqft) {
      // Validate that sqft is a number
      if (typeof sqft !== 'number') throw TypeError('amount must be a number');
  
      // Check if the constructor is directly invoked (not via a subclass)
      if (this.constructor !== Building) {
        // Check if the subclass overrides evacuationWarningMessage
        if (!this.evacuationWarningMessage) {
          throw Error('Class extending Building must override evacuationWarningMessage');
        }
      }
  
      // Set the square footage
      this._sqft = sqft;
    }
  
    /**
     * Gets the square footage of the building.
     * @returns {number} The square footage of the building.
     */
    get sqft() {
      return this._sqft;
    }
  }
  