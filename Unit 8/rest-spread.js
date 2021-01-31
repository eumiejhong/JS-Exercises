function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

const filterOutOdds = (...args) => args.filter(num => num % 2 === 0)

const findMin = (...args) => Math.min(...args)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val * 2)]

const removeRandom = items => {
    let randomEl = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomEl), ...items.slice(randomEl + 1)]
}

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

const addKeyVal = (obj, key, val) => {
    return {...obj, [key]:val};
}

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const update = (obj, key, val) => {
    return {...obj, [key]: val};
}