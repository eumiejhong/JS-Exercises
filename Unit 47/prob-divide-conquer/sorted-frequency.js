function sortedFrequency(arr, val) {
    let firstIdx = firstFirstIndex(val, arr, 0, arr.length - 1);
    let lastIdx = firstLastIndex(val, arr, 0, arr.length - 1);
    return 1 + lastIdx - firstIdx;
}

function firstFirstIndex(val, arr, leftIdx, rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    
    if (rightIdx - leftIdx === 1) {
        return arr[leftIdx] === val ? leftIdx : rightIdx;
    }

    if (middleVal < val) {
        return firstFirstIndex(val, arr, middleIdx, rightIdx);
    } else {
        return firstFirstIndex(val, arr, leftIdx, middleIdx);
    }
}

function firstLastIndex(val, arr, leftIdx, rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    
    if (rightIdx - leftIdx === 1) {
        return arr[leftIdx] === val ? leftIdx : rightIdx;
    }

    if (middleVal <= val) {
        return firstLastIndex(val, arr, middleIdx, rightIdx);
    } else {
        return firstLastIndex(val, arr, leftIdx, middleIdx);
    }
}

module.exports = sortedFrequency

console.log(sortedFrequency([1,1,2,2,2,2,3], 1));