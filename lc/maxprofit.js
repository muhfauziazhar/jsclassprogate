const maxProfit = (prices) => {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    let prev = prices[i - 1];
    let current = prices[i];

    if (prev < current) {
      profit += current - prev;
    }
  }

  return profit;
};

let prices = [7, 1, 5, 3, 6, 4];
let prices2 = [1, 2, 3, 4, 5];
let prices3 = [7, 6, 4, 3, 1];

console.log(maxProfit(prices3));
