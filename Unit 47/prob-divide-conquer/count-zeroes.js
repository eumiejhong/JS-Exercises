function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (rightIdx - leftIdx === 1) {
            break
        }

        if (middleVal === 1) {
            console.log(`found 1 moving left indx to ${middleIdx}`)
            leftIdx = middleIdx;
        }
        else if (middleVal === 0) {
            console.log(`found 0 moving right indx to ${middleIdx}`)
            rightIdx = middleIdx;
        } 
    }
    console.log(arr.length - rightIdx - arr[rightIdx]);
}

module.exports = countZeroes

countZeroes([1,1,1,1,1,1])