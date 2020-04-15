class SieveOfEratosthenes {
    constructor(n) {
        this.limit = n;
    }

    getPrimes() {
        const primes = [];

        for (let i = 2; i < this.limit; i++) {
            primes.push(i);
        }

        let n = 0;

        function countPrimes(limit) {
            const startingpoint = primes[n];
            for (let i = 1; i < primes.length; i++) {
                if (primes[i] % startingpoint === 0 && primes[i] !== startingpoint) {
                    primes.splice(i, 1);
                }
            }

            n++;

            if (startingpoint < limit) {
                countPrimes(limit);
            }
        }

        countPrimes(this.limit);

        return primes;
    }

}

module.exports = SieveOfEratosthenes;

const sieveOfEratosthenes = new SieveOfEratosthenes(50);
sieveOfEratosthenes.getPrimes();