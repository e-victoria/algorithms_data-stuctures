import QuickSort from '../../../../src/algorithms/sorting/QuickSort';

describe("QuickSort", function() {
    let quickSort;
  
    it("should return sorted array from [5, 15, 1, 4, 0, 23, 7]", function() {
        quickSort = new QuickSort([5, 15, 1, 4, 0, 23, 7]);
        const actual = quickSort.sort();
        expect(actual).toEqual([0, 1, 4, 5, 7, 15, 23]);
    });

    it("should return sorted array from [12, 6, 12, 65, 32, 4, 2, 354]", function() {
        quickSort = new QuickSort([12, 6, 12, 65, 32, 4, 2, 354]);
        const actual = quickSort.sort();
        expect(actual).toEqual([2, 4, 6, 12, 12, 32, 65, 354]);
    });

    it("should return sorted array from [0, 1, 2, 3, 7, 8, 4]", function() {
        quickSort = new QuickSort([0, 1, 2, 3, 7, 8, 4]);
        const actual = quickSort.sort();
        expect(actual).toEqual([0, 1, 2, 3, 4, 7, 8]);
    });

    it("should return sorted array from [0, 1, 2, 3, 7, 8, 4, 1]", function() {
        quickSort = new QuickSort([0, 1, 2, 3, 7, 8, 4, 1]);
        const actual = quickSort.sort();
        expect(actual).toEqual([0, 1, 1, 2, 3, 4, 7, 8]);
    });

});