function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

function remove(item, items) {
    for (let i=0; i<items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}