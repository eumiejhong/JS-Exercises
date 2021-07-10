const fs = require('fs');

function cat(path) {
    fs.readfile(path, 'utf8', function(err, data) {
        if(err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`file contents: ${data}`)
    })
}

module.exports = {
    cat: cat
};
