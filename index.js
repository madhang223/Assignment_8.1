$(function(){
    console.log(isPrime(98));
    console.log(isPrime(97));

    function isPrime(number){
        if (number == 1 || number == 2) {
           return true;
        }

        for (i = 2; i <= number - 1; i++) {
            if (number % i == 0) {
                return false;
                break;
            } else {
                return true;
            }
        }
    }
});