const countPrimeNumbers = () => {
    var count = 1;

    for (var i = 3; i <= 97; i++) {
        var isPrime = (i) => {
            for (var n = 2; n < Math.sqrt(i); n++)
                if (i % n === 0) return false;
            return true;
        }
        if (isPrime(i)) count++;
    }
    return count;
}

var t0 = performance.now();
var primes = 0
for (var i = 0; i < 100; i++) primes += countPrimeNumbers();

var t1 = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${t1-t0} milliseconds.`);
