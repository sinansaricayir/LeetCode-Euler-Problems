var factors = {};
factors.getFactors = function (number){
    var factors = [];
    
    var possibleFactor = 1;
    var sqrt = Math.sqrt(number);
    while(possibleFactor <= sqrt){
        if(number % possibleFactor == 0){
            factors[factors.length] = possibleFactor;
            
            var otherPossibleFactor = number / possibleFactor;
            if(otherPossibleFactor > possibleFactor){
                factors[factors.length] = otherPossibleFactor;
            } 
        }
        possibleFactor++;
    }
    
    return factors;
};//End of factors.getFactors function
var prime = {};
prime.isPrime = function(num){
    num = (num > 0) ? num : num * -1;
    return factors.getFactors(num).length == 2;
};//Checks if the provided number is prime

var isPandigital = function(number){
    var numString = number + '';
    var numLength = numString.length;
    for(var i = 1; i <= numLength; i++){
        if(numString.indexOf(i+'')==-1){
            return false;
        }
    }

    return true;
};

console.log(isPandigital(2143));

//because 1+2+3+4+5+6+7+8 is a multiple of 3 and 1+2+3+4+5+6+7+8+9 is a multiple of 3, 8 and 9 digit pandigital primes are not possible!

var pandigitalNumbers = 0;
for(var i = 7654321; i > 0; i--){
    if(isPandigital(i)){
        if(prime.isPrime(i)){
            console.log(i);
            break;
        }
    }
}
