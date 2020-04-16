class QuickSort {
    constructor(array) {
        this.array = array;
    }

    sort() {
        let i = 0;
        let j = this.array.length;
        this.repeat(i, j);
        return this.array;
    }

    repeat(i, j) {
        if (i < j) {
            const newPivotIndex = this.partionAndSort(i, j, this.array[i]);
            this.repeat(0, newPivotIndex);
            this.repeat(newPivotIndex + 1, j);
        }
    }

    partionAndSort(i, j, pivot) {
        let n = 0;

        while (i < j) {
            if (this.array[i] >= pivot) {
                j--;
                if (this.array[j] < pivot) {
                    n++;
                    let middler = this.array[i];
                    this.array[i] = this.array[j];
                    this.array[j] = middler;
                }
            }  else {
                i++;
            }
        }

        if (n > 0) {
            this.array[this.array.indexOf(pivot)] = this.array[j];
            this.array[j] = pivot;
            pivot = this.array[i];

        }
        return j;
    }
}

module.exports = QuickSort;

const quickSort = new QuickSort([5, 15, 1, 4, 2, 23, 0]);
console.log(quickSort.sort());