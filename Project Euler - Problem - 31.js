var coinValues = [1, 2, 5, 10, 20, 50, 100, 200];

var comboCounts = [];
for(var i = 0; i < coinValues.length; i++){
    comboCounts[i] = [];
}

var findDifferentCoinCombos = function(amount, maxIndex) {
    var combos = 0;

    
    maxIndex = (maxIndex || maxIndex == 0) ? maxIndex : coinValues.length - 1;
    
    if(maxIndex == 0 || amount == 0){
        return 1;
    }
    
    if(comboCounts[maxIndex][amount]){
        return comboCounts[maxIndex][amount];
    }
    
   
    var coinValue = coinValues[maxIndex];
    var coinAmount = 0;
    while(amount >= coinAmount){
        combos += findDifferentCoinCombos(amount - coinAmount, maxIndex - 1);
        coinAmount += coinValue;
    }
    
    
    return combos;
};

console.log(findDifferentCoinCombos(200));
