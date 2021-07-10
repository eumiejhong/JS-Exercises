
const axios = require('axios');

function webCat(URL) {
    axios.get(URL).then(function(err, response) {
        if(err) {
            console.error(`Error fetching ${URL}: ${err}`)
            process.exit(1);
        }
        console.log(response.data)
    })
}

function cat(path) {
    fs.readfile(path, 'utf8', function(err, data) {
        if(err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`file contents: ${data}`)
    })
}

let path = process.arg[2];
if(path.slice(0,4) === 'http') {
    webCat(path);
} else {
    cat(path);
}
