import MergeSort from '../../../../src/algorithms/sorting/MergeSort';

describe("MergeSort", function() {
    let mergeSort;
  
    beforeEach(function() {
        mergeSort = new MergeSort();
    });
  
    it("should return sorted array from [5, 15, 1, 4, 0, 23, 7]", function() {
        const unsortedArray = [5, 15, 1, 4, 0, 23, 7];
        const actual = mergeSort.sort(unsortedArray);
        expect(actual).toEqual([0, 1, 4, 5, 7, 15, 23]);
    });

    it("should return sorted array from [12, 6, 12, 65, 32, 4, 2, 354]", function() {
        const unsortedArray = [12, 6, 12, 65, 32, 4, 2, 354];
        const actual = mergeSort.sort(unsortedArray);
        expect(actual).toEqual([2, 4, 6, 12, 12, 32, 65, 354]);
    });

});