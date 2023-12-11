/**
 * Calculates the time (in months) it would take for the price of a house
 * to be paid off if the house were rented out at the average rental rate.
 *
 * @param {number} price - The price of the house.
 * @param {number} averageRent - The average rental rate of the house per month.
 * @param {number} [principal=0] - The amount of (unborrowed) money being put down as a deposit for the house.
 * @param {number} [apr=0] - The annual interest rate on a bank mortgage.
 * @returns {number} - The time (in months) it would take for the house to be paid off.
 */
export function calculateTimespan(
  price: number,
  averageRent: number,
  principal: number = 0,
  apr: number = 0
): number {
  if (averageRent <= 0) {
    throw new Error("Average rent should be greater than 0.");
  }

  if (price <= 0) {
    throw new Error("Price of the house should be greater than 0.");
  }

  if (principal < 0) {
    throw new Error("Principal should not be negative.");
  }

  if (apr < 0) {
    throw new Error("APR should not be negative.");
  }

  // Calculate the remaining mortgage amount after considering the principal
  const remainingMortgage = price - principal;

  // Calculate the monthly interest rate
  const monthlyInterestRate = apr / 12 / 100;

  // Calculate the time to pay off (in months) with more precision
  const numberOfMonths =
    ((-1 / 12) *
      Math.log(1 - (remainingMortgage * monthlyInterestRate) / averageRent)) /
    Math.log(1 + monthlyInterestRate);

  return numberOfMonths;
}
