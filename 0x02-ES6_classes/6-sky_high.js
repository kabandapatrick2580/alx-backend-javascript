import Building from './5-building';

/**
 * Represents a skyscraper building that extends the Building class.
 */
export default class SkyHighBuilding extends Building {
  /**
   * Constructs a new SkyHighBuilding instance.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    // Call the constructor of the parent class (Building)
    super(sqft);
    
    // Initialize the number of floors
    this._floors = floors;
  }

  /**
   * Gets the number of floors in the building.
   * @returns {number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Provides an evacuation warning message for the skyscraper.
   * @returns {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`; // A specific message for evacuation
  }
}
