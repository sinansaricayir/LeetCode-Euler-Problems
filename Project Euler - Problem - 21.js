var factors = {};

factors.getFactors = function (number){
    var factors = [];
    var highFactors = [];
    
    var possibleFactor = 1;
    var sqrt = Math.sqrt(number);
    while(possibleFactor <= sqrt){
        if(number % possibleFactor == 0){
            factors[factors.length] = possibleFactor;
            
            var otherPossibleFactor = number / possibleFactor;
            if(otherPossibleFactor > possibleFactor){
                highFactors[highFactors.length] = otherPossibleFactor;
            } 
        }
        possibleFactor++;
    }
    for(var i=highFactors.length-1; i >= 0; i--){
        factors[factors.length] = highFactors[i];
    }
    
    return factors;
};

var getNaturalFactors = function(number){
    var naturalFactors = factors.getFactors(number);
    naturalFactors.splice(naturalFactors.length - 1, 1);
    return naturalFactors;
};

var getSumOfArray = function(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
    
var amicableNumbersSum = 0;

for(var i = 1; i < 10000; i++){
    var naturalFactorsSum = getSumOfArray(getNaturalFactors(i));
    if(naturalFactorsSum != i){
        var testI = getSumOfArray(getNaturalFactors(naturalFactorsSum));
        if(i == testI){
            amicableNumbersSum += i;
            console.log('Amicable number found: ' + i);
        }
    }
}

console.log(amicableNumbersSum);
