export default class MergeSort {
    sort(unsortedArray) {
        this.sortedArray = [];
        
        return this.divide(unsortedArray);
    }

    divide(unsortedArray) {
        if (unsortedArray.length < 2) {
            return unsortedArray;
        }

        const rightArray = unsortedArray.slice(Math.floor(unsortedArray.length / 2));
        const leftArray = unsortedArray.slice(0, Math.floor(unsortedArray.length / 2));

        return this.compare(this.divide(leftArray), this.divide(rightArray));
    }

    compare(leftArray, rightArray) {
        const sortedArray = [];
        while (leftArray.length && rightArray.length ) {
            if (leftArray[0] < rightArray[0]) {
                sortedArray.push(leftArray.shift());
            } else {
                sortedArray.push(rightArray.shift());
            }
        }
        return sortedArray.concat(leftArray).concat(rightArray);
    }
}