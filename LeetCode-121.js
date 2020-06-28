var maxProfit = function(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = prices.length - 1; j > i; j--) {
      const profit = prices[j] - prices[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
};



var maxProfit2 = function(prices) {
  let min = Number.POSITIVE_INFINITY;
  let max = 0;
  for (let val of prices) {
    if (val < min) {
      min = val;
    } else {
    
      max = Math.max(max, val - min);
    }
  }
  return max;
};
maxProfit2([7, 1, 5, 3, 6, 4]); 
maxProfit([7, 1, 5, 3, 6, 4]);
