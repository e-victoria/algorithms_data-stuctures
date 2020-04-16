describe("BinarySearch", function() {
  var BinarySearch = require('../../../../src/algorithms/search/BinarySearch');
  var binarySearch


  beforeEach(function() {
    binarySearch = new BinarySearch();
  });

  it("should find 22 from array and return true", function() {
    const actual = binarySearch.getIsNumberInArray([1, 22, 4], 22);
    expect(actual).toBe(true);
  });

  it("should find 2 from array and return true", function() {
    const actual = binarySearch.getIsNumberInArray([1, 32, 22, 12, 2, 34, 543, 2, 4], 2);
    expect(actual).toBe(true);
  });

  it("should find 2 from array and return true", function() {
    const actual = binarySearch.getIsNumberInArray([2], 2);
    expect(actual).toBe(true);
  });

  it("should find 1 from array and return true", function() {
    const actual = binarySearch.getIsNumberInArray([2, 1], 1);
    expect(actual).toBe(true);
  });

  it("should return false", function() {
    const actual = binarySearch.getIsNumberInArray([1], 2);
    expect(actual).toBe(false);
  });

  it("should find 6 from array and return true", function() {
    const actual = binarySearch.getIsNumberInArray([1, 22, 6, 4], 6);
    expect(actual).toBe(true);
  });

  it("should return false", function() {
    const actual = binarySearch.getIsNumberInArray([1, 22, 4], 23);
    expect(actual).toBe(false);
  });

});
