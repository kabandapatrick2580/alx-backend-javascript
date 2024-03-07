import Currency from './3-currency';

/**
 * Represents a pricing with an amount and a currency.
 */
export default class Pricing {
  /**
   * Constructs a new Pricing instance.
   * @param {number} amount - The amount of the pricing.
   * @param {Currency} currency - The currency of the pricing.
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Gets the amount of the pricing.
   * @returns {number} The amount of the pricing.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the amount of the pricing.
   * @param {number} value - The new amount for the pricing.
   */
  set amount(value) {
    this._amount = value;
  }

  /**
   * Gets the currency of the pricing.
   * @returns {Currency} The currency of the pricing.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency of the pricing.
   * @param {Currency} value - The new currency for the pricing.
   */
  set currency(value) {
    this._currency = value;
  }

  /**
   * Displays the full price with currency information.
   * @returns {string} The full price with currency information.
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Static method to convert price based on a conversion rate.
   * @param {number} amount - The amount to convert.
   * @param {number} conversionRate - The conversion rate.
   * @returns {number} The converted price.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
