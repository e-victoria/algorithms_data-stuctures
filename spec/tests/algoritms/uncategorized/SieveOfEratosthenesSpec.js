describe("SieveOfEratosthenes", function() {
    const SieveOfEratosthenes = require('../../../../src/algorithms/uncategorized/sieve_of_Eratosthenes/SieveOfEratosthenes');
    let sieveOfEratosthenes;
  
    beforeEach(function() {
        sieveOfEratosthenes = new SieveOfEratosthenes(50);
    });
  
    it("return all prime numbers in given limit", function() {
      const actual = sieveOfEratosthenes.getPrimes();
      expect(actual).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
    });

  });
  