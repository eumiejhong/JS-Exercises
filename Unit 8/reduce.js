//reduce
//extractValue
function extractValue(arr, key) {
    return arr.reduce(function(accum, nextVal) {
        accum.push(nextVal[key]);
        return accum;
    }, [])
}

//vowelCount
function vowelCount(str) {
        let vowels = 'aeiou'
    return str.split('').reduce(function(accum, nextVal) {
        let lowerCased = nextVal.toLowerCase();
        if(vowels.indexOf(lowerCased)){
            if(accum[lowerCased]) {
                accum[lowerCased]++;
            } else {
                accum[lowerCased] = 1;
            }
        }
        return accum;
    }, {})
}

//addKeyAndValue
function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accum, nextVal) {
        const element = {...nextVal};
        element[key] = value;
        accum.push(element);
        return accum;
    }, [])
}

//partition
function partition (arr, callBack) {
    return arr.reduce(function(accum, next) {
        if(callBack(next)) {
            accum[0].push(next);
        } else {
            accum[1].push(next);
        }
    }, [[], []]);
}