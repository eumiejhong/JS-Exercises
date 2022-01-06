function findRotatedIndex(arr, val) {
    let pivot = findPivot(arr)
    if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
        return binarySearch(arr, val, 0, pivot - 1);
    }
    else {
        return binarySearch(arr, val, pivot, arr.length - 1);
    }
}

function binarySearch(arr, val, start, end) {
    if (arr.length === 0) {
        return -1;
    }
    if (val < arr[start] || val > arr[end]) {
        return -1;
    }
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === num) {
            return mid;
        }
        else if (num < arr[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
}

function findPivot(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length-1]) {
        return 0
    }
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid + 1]) {
            return mid + 1
        }
        else if (arr[start] <= arr[mid]) {
            start = mid + 1
        }
        else {
            end = mid - 1
        }
    }
}

module.exports = findRotatedIndex

findRotatedIndex([3,4,1,2],4)