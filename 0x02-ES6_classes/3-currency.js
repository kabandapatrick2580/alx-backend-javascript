/**
 * Represents a currency with a code and a name.
 */
export default class Currency {
    /**
     * Constructs a new Currency instance.
     * @param {string} code - The currency code.
     * @param {string} name - The currency name.
     */
    constructor(code, name) {
      this._code = code;
      this._name = name;
    }
  
    /**
     * Gets the currency code.
     * @returns {string} The currency code.
     */
    get code() {
      return this._code;
    }
  
    /**
     * Sets the currency code.
     * @param {string} value - The new currency code.
     */
    set code(value) {
      this._code = value;
    }
  
    /**
     * Gets the currency name.
     * @returns {string} The currency name.
     */
    get name() {
      return this._name;
    }
  
    /**
     * Sets the currency name.
     * @param {string} value - The new currency name.
     */
    set name(value) {
      this._name = value;
    }
  
    /**
     * Displays the full currency name along with its code.
     * @returns {string} The full currency name and code.
     */
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
  