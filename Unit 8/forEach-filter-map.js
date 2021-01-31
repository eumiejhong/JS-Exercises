//forEach exercises
//doubleValues (forEach)
function doubleValues(array) {
    return array.map(function(value) {
        return value * 2;
    })
}

//onlyEvenValues
function onlyEvenValues(array) {
    return array.filter(function(value) {
        return value % 2 === 0;
    });
}

//showFirstAndLast
function showFirstAndLast(array) {
    return array.map(function(value) {
        return value[0] + value[value.length - 1];
    })
}

//addKeyAndValue
function addKeyAndValue(array, key, value) {
    return array.map(function(item) {
        item[key] = value;
        return item;
    });
}

function vowelCount(str) {
    let splitStr = str.split("");
    let obj = {};
    const vowels = "aeiou";
    splitStr.forEach(function(letter) {
        let lowerCaseLetter = letter.toLowerCase();
        if(vowels.indexOf(lowerCaseLetter) !== -1) {
            if(obj[lowerCaseLetter]) {
                obj[lowerCaseLetter]++;
            }
        }
        else {
            obj[lowerCaseLetter] = 1;
        }
    });
    return obj;
}

//map exercises
//doubleValuesWithMap
function doublValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

//valTimesIndex
function valTimesIndex(arr) {
    return arr.map(function(val, index) {
        return val * index;
    });
}

//extractKey
function extractKey(arr, key) {
    return arr.map(function(val) {
        return val[key];
    });
}

//extractFullName
function extractFullName(arr) {
    return arr.map(function(val) {
        return val.first + " " + val.last;
    });
}

//filter
//filterByValue
function filterByValue(arr, key) {
    return arr.filter(function(val){
        return val[key] !== undefined;
    })
}

//find
function find(arr, value) {
    return arr.filter(function(el) {
        if(value === el) {
            return value;
        }
    })[0];
}

//findInObj
function findInObj(arr, key, value) {
    return arr.filter(function(el) {
        return el[key] === value;
    })[0];
}

//removeVowels
function removeVowels(str) {
    let vowels = 'aeiou'
    return str.toLowerCase().split("")
    .filter(function(val) {
        return vowels.indexOf(val) === -1;
    })
    .join("");
}

//doubleOddNumbers
function doubleOddNumbers(arr) {
    return arr
        .filter(function(val) {
            return val % 2 !== 0;
        })
        .map(function(val) {
            return val * 2;
        });
}