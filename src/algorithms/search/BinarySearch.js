export default class BinarySearch {
    getIsNumberInArray(array, targetNum) {
        const sortedArray = array.sort((a, b) => a - b);
        let middleElIndex = Math.floor((sortedArray.length - 1) / 2);

        if (array.length === 1 && array[0] !== targetNum) {
            return false;
        }

        if (sortedArray[middleElIndex] === targetNum) {
            return true;
        } else if (sortedArray[middleElIndex] > targetNum) {
            const newArray = sortedArray.slice(0, middleElIndex);
            return this.getIsNumberInArray(newArray, targetNum);
        } else {
            const newArray = sortedArray.slice(middleElIndex + 1, sortedArray.length);
            return this.getIsNumberInArray(newArray, targetNum);
        }
    }
}